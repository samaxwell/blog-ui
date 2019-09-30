import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BlogPreview } from '../model/blog-preview';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
} )
export class BlogService {

  private blogUrl = environment.blogServiceUrl + '/v1/blogs';

  constructor(private client: HttpClient) { }

  getBlogsShortDetails(): Observable<BlogPreview[]> {
    return this.client.get<BlogPreview[]>(this.blogUrl);
  }
}
