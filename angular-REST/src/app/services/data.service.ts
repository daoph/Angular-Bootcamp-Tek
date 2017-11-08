import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Book }    from '../model/book';

@Injectable()
export class DataService {
private headers = new Headers({ 'Content-Type' : 'application/json',
'charset' : 'UTF-8'});
private options = new RequestOptions({headers: this.headers});

  constructor(private http: Http) { }

  getBooks(): Observable<any> {
    return this.http.get('/books').map(resp => resp.json())
    .catch(this.onError);
  }

  getBook(isbn: number): Observable<any> {
    return this.http.get(`/books.#{isbn}`).map(resp => resp.json()).catch(this.onError);
  }

  addEditBook(book: Book): Observable<any> {
    return this.http.put('/books/${book.isbn}', JSON. stringify(book),
  this.options).map(this.mapResponseStatus).catch(this.onError);
  }

  deleteBook(book: Book): Observable<any> {
    return this.http.delete(`/books/${book.isbn}`)
    .map(this.mapResponseStatus).catch(this.onError);
  }
  
  mapResponseStatus(resp: any): any {
	return {
    status: resp.status,
    statusText: resp.statusText,
    ok: resp.ok

	};
  }
  
  onError(resp: any): Observable<any> {
    let msg = resp.status + ":" + resp.statusText;
    console.log(msg);
	return Observable.throw(msg);
  }

}