import { Component, OnInit } from '@angular/core';
import { BlogService } from '../service/blog.service';
import { BlogPreview } from '../model/blog-preview';

@Component({
  selector: 'app-blogs-list',
  templateUrl: './blogs-list.component.html',
  styleUrls: ['./blogs-list.component.scss']
})
export class BlogsListComponent implements OnInit {

  blogDetails: BlogPreview[];
  
  constructor(private blogService: BlogService) { }

  ngOnInit() {
    console.log('Fetching blogs...');
    this.blogService.getBlogsShortDetails().subscribe(blogs => {
      this.blogDetails = blogs;
      blogs.forEach(b => console.log(b));
    });
  }

}
