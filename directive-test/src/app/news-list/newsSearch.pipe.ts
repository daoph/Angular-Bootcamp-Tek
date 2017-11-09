import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'newsSearch'
})

export class NewsSearchPipe implements PipeTransform{

transform(sourceList: {title:string, body:string}[], searchText:string) {
    if (searchText === undefined || searchText.length == 0) {
        //No search term
        return sourceList
    }

    let reg = new RegExp(searchText, 'i')

    return sourceList.filter(news =>
    news.title.search(reg) >= 0 || news.body.search(reg) >= 0)
}


}