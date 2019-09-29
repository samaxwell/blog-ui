import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BlogViewComponent } from './blogs/blog-view/blog-view.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'test', component: HomeComponent },
  { path: 'blog1', component: BlogViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
