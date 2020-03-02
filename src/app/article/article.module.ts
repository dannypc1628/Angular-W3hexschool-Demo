import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleListComponent } from './article-list/article-list.component';
import {DataService} from './data.service';



@NgModule({
  declarations: [ArticleListComponent],
  exports: [ArticleListComponent],
  imports: [
    CommonModule
  ],
  providers: [DataService]
})
export class ArticleModule { }
