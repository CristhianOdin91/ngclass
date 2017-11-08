import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class BooksService{

  constructor(
    private http:Http
  ){}

  public getBooks():Observable<any>
  {
    return this.http.get('http://localhost:3000/books')
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  private extractData( res: Response ){
    let body = res.json();
    return body || {};
  }

  private handleError( error: Response | any ){
    let errMsg: string;

    if( error instanceof Response )
    {
      const body = error.json() || '';
      const err = body.message || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    }
    else
      errMsg = error.message ? error.message : error.toString();

    // console.error(errMsg);

    return Observable.throw(error);
  }
}
