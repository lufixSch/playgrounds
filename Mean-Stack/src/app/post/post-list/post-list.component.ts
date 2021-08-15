import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Post } from '../post.model';
import { PostService } from '../post.service';
import { PaginationService } from './pagination.service';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent implements OnInit, OnDestroy {
  posts: Post[] = [];
  isloading = false;
  isAuthenticated = false;
  private postsSub: Subscription;
  private authStatus: Subscription;

  constructor(
    public postService: PostService,
    public pagination: PaginationService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.isloading = true;
    this.postService.getPosts(
      this.pagination.postsPerPage,
      this.pagination.page
    );
    this.postsSub = this.postService
      .getPostsUpdateListener()
      .subscribe((postData: { posts: Post[]; count: number }) => {
        this.isloading = false;
        this.pagination.totalPosts = postData.count;
        this.posts = postData.posts;
      });
    this.isAuthenticated = this.authService.getIsAuth();
    this.authStatus = this.authService
      .getAuthStatusListener()
      .subscribe(isAuthenticated => {
        this.isAuthenticated = isAuthenticated;
      });
  }

  onChange(e) {
    this.isloading = true;
    this.pagination.changeItemsPerPage(e);
    this.postService.getPosts(
      this.pagination.postsPerPage,
      this.pagination.page
    );
  }

  onPageForward() {
    if (this.pagination.pageForward()) {
      this.isloading = true;
      this.postService.getPosts(
        this.pagination.postsPerPage,
        this.pagination.page
      );
    }
  }

  onPageBackward() {
    if (this.pagination.pageBack()) {
      this.isloading = true;
      this.postService.getPosts(
        this.pagination.postsPerPage,
        this.pagination.page
      );
    }
  }

  onDelete(id: string) {
    this.isloading = true;
    this.postService.deletePost(id).subscribe(() => {
      this.postService.getPosts(
        this.pagination.postsPerPage,
        this.pagination.page
      );
    });
  }

  ngOnDestroy() {
    this.postsSub.unsubscribe();
    this.authStatus.unsubscribe();
  }
}
