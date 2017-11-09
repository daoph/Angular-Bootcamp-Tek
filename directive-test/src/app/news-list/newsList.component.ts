import { NewsService } from './news.service';
import { Component } from '@angular/core';


@Component({
    selector: "news-list",
    // providers: [NewsService], //removed in part 5. it's passed on from the app module (NGModule)
    styles: [`
    .collapsed {
        height: 16pt;
        overflow: hidden;
    }
    `],
    template: `
   <div>
   <input type ="text"[(ngModel)]="searchText" placeholder="Search"/>
    <div *ngFor = "let news of (newsItems | newsSearch:searchText); let newsId = index">
    <h3>{{news.title | uppercase}}</h3>
    <p [ngClass] = "{collapsed: selectedNewsId != newsId}">
    {{news.body}}
    </p>
    <a href (click)="expandNews(newsId)"
    *ngIf = "selectedNewsId == newsId">More...</a>
    </div>
</div>
    `
})
export class NewsList {
    searchText: string;
    newsItems: { title:string, body:string}[]=[];

// newsSvc : NewsService; //this is deleted in favor of shorthand syntax on line 34
selectedNewsId:number;

    constructor(private newsSvc:NewsService) { //variable declared inside constructor
        newsSvc.getNewsItems().subscribe(response => {
            this.newsItems= response.json()
        },
        error => {
            alert("Sorry. There was a problem getting data")
        })
        // this.newsSvc = svc; //this is deleted in favor of shorthand syntax on line 34
    }

// getAllNews(){
//     return this.newsSvc.getNewsItems();  //deleted for lab 13
// }

expandNews(id:number){
    this.selectedNewsId = id;
    return false;
}
}