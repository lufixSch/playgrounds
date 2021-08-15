import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { PostService } from '../post.service';
import { Post } from '../post.model';
import { mimeType } from './mime-type.validator';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css'],
})
export class PostCreateComponent implements OnInit {
  titleValidation = true;
  contentValidation = true;
  post: Post;
  isloading = false;
  form: FormGroup;
  imagePreview: string;
  mode = 'create';
  private editID: string;

  constructor(public postService: PostService, public route: ActivatedRoute) {}

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(3)],
      }),
      content: new FormControl(null, { validators: [Validators.required] }),
      image: new FormControl(null, {
        validators: [Validators.required],
        asyncValidators: [mimeType],
      }),
    });

    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('id')) {
        this.mode = 'edit';
        this.editID = paramMap.get('id');
        if (this.postService.getPost(this.editID).defined) {
          this.post = this.postService.getPost(this.editID).array;
          this.form.setValue({
            title: this.post.title,
            content: this.post.content,
            image: this.post.imagePath,
          });
        } else {
          this.isloading = true;
          this.postService.getPost(this.editID).observable.subscribe(data => {
            this.isloading = false;
            this.post = {
              id: data.post.id,
              title: data.post.title,
              content: data.post.content,
              imagePath: data.post.imagePath,
            };
            this.form.setValue({
              title: this.post.title,
              content: this.post.content,
              image: this.post.imagePath,
            });
          });
        }
      } else {
        this.mode = 'create';
        this.editID = null;
      }
    });
  }

  onBlurTitle() {
    this.titleValidation = false;
  }

  onBlurContent() {
    this.contentValidation = false;
  }

  onImagePicked(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({ image: file });
    this.form.get('image').updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = e => {
      this.imagePreview = reader.result as string;
    };
    reader.readAsDataURL(file);
  }

  onSavePost() {
    this.isloading = true;
    this.titleValidation = false;
    this.contentValidation = false;
    if (this.form.invalid) {
      return;
    }
    if (this.mode === 'create') {
      this.postService.addPost(
        this.form.value.title,
        this.form.value.content,
        this.form.value.image
      );
    } else if (this.mode === 'edit') {
      this.postService.updatePost(
        this.editID,
        this.form.value.title,
        this.form.value.content,
        this.form.value.image
      );
    }
  }
}
