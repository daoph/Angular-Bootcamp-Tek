import { NewsService } from './news-list/news.service';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NewsList } from './news-list/newsList.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { NewsSearchPipe } from './news-list/newsSearch.pipe';

@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule ],
  declarations:  [ NewsList, NewsSearchPipe ],
  providers: [NewsService],
  bootstrap:     [ NewsList ]
})
export class AppModule { }
