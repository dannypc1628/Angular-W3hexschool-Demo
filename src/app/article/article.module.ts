import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleListComponent } from './article-list/article-list.component';
import {DataService} from './data.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [ArticleListComponent],
  exports: [ArticleListComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [DataService]
})
export class ArticleModule { }
