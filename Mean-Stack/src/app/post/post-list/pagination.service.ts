import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class PaginationService {
  postNumbers = {
    begin: 1,
    end: 2,
  };
  totalPosts = 0;
  postsPerPage = 2;
  lastpage = null;
  page = 1;
  pageSizeOptions = [2, 5, 10];

  changeItemsPerPage(postsPerPage) {
    this.postsPerPage = postsPerPage.target.value;
    this.page = 1;
    this.postNumbers.begin = this.postsPerPage * (this.page - 1) + 1;
    this.postNumbers.end = this.postsPerPage * this.page;
  }

  pageForward() {
    if (this.postNumbers.end < this.totalPosts) {
      this.lastpage = this.page;
      this.page = this.page + 1;
      this.postNumbers.begin = this.postsPerPage * (this.page - 1) + 1;
      this.postNumbers.end = this.postsPerPage * this.page;
      return true;
    } else {
      return false;
    }
  }

  pageBack() {
    if (this.postNumbers.begin > 1) {
      this.lastpage = this.page;
      this.page = this.page - 1;
      this.postNumbers.begin = this.postsPerPage * (this.page - 1) + 1;
      this.postNumbers.end = this.postsPerPage * this.page;
      return true;
    } else {
      return false;
    }
  }
}
