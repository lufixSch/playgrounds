import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

import { Post } from './post.model';

@Injectable({ providedIn: 'root' })
export class PostService {
  private posts: Post[] = [];
  private postsUpdated = new Subject<{ posts: Post[]; count: number }>();

  constructor(private http: HttpClient, private router: Router) {}

  getPosts(postsPerPage: number, currentPage: number) {
    const queryParams =
      '?pagesize=' + postsPerPage + '&currentpage=' + currentPage;
    this.http
      .get<{ message: string; posts: Post[]; count: number }>(
        'http://localhost:3000/api/posts' + queryParams
      )
      .subscribe(postData => {
        this.posts = postData.posts;
        this.postsUpdated.next({
          posts: [...this.posts],
          count: postData.count,
        });
      });
  }

  getPostsUpdateListener() {
    return this.postsUpdated.asObservable();
  }

  getPost(id: String) {
    const defined = this.posts.length !== 0;
    const array = { ...this.posts.find(p => p.id === id) };
    const observable = this.http.get<{ message: string; post: Post }>(
      'http://localhost:3000/api/posts/' + id
    );

    return { defined, array, observable };
  }

  addPost(title: string, content: string, image: File) {
    const postData = new FormData();
    postData.append('title', title);
    postData.append('content', content);
    postData.append('image', image, title);
    this.http
      .post<{ message: string; post: Post }>(
        'http://localhost:3000/api/posts',
        postData
      )
      .subscribe(responseData => {
        this.router.navigate(['/']);
      });
  }

  updatePost(id: string, title: string, content: string, image: File | string) {
    let postData: Post | FormData;
    if (typeof image === 'object') {
      postData = new FormData();
      postData.append('id', id);
      postData.append('title', title);
      postData.append('content', content);
      postData.append('image', image, title);
    } else {
      postData = {
        id: id,
        title: title,
        content: content,
        imagePath: image,
      };
    }
    this.http
      .put<{ message: string; imagePath: string }>(
        'http://localhost:3000/api/posts/' + id,
        postData
      )
      .subscribe(response => {
        this.router.navigate(['/']);
      });
  }

  deletePost(id: string) {
    return this.http.delete('http://localhost:3000/api/posts/' + id);
  }
}
