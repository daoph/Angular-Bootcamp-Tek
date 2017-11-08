import { NewsService } from './news-list/news.service';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NewsList } from './news-list/newsList.component';
import { HttpModule } from '@angular/http';

@NgModule({
  imports:      [ BrowserModule, HttpModule ],
  declarations:  [ NewsList ],
  providers: [NewsService],
  bootstrap:     [ NewsList ]
})
export class AppModule { }
