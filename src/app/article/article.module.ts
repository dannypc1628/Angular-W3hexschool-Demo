import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleListComponent } from './article-list/article-list.component';
import {DataService} from './data.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [ArticleListComponent],
  exports: [ArticleListComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserModule
  ],
  providers: [DataService]
})
export class ArticleModule { }
