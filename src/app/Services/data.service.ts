import { NotFound } from './../../../../../HttpServices/src/app/Common/NotFound';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import {Observable } from 'rxjs/';


export class DataService{

  

  constructor( private url : string, private http : HttpClient) {
  }
  getAll(){
    return this.http.get(this.url)
    .pipe(
      catchError(this.handleError)
    );
  }

    private handleError(error : HttpErrorResponse){
      if(error.status === 404)
      {
         return Observable.throw(new NotFound());
      }
    }
}