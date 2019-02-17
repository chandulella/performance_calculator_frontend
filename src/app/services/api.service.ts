import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { RequestOptions,Headers } from '@angular/http';

@Injectable()
export class ApiServiceService {
  headers:any;

  constructor(
  ) {
    this.headers = new Headers({ 'Content-Type': 'application/json'});
    // this.headers.append('Accept', 'application/json');
    // this.headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, DELETE, PUT');
    // this.headers.append('Access-Control-Allow-Origin', '*');
    // this.headers.append('Access-Control-Allow-Headers', "X-Requested-With, Content-Type, Origin, Authorization, Accept, Client-Security-Token, Accept-Encoding");
   }
 
  // protected formatErrors(error: any) {
  //   return new ErrorObservable(error.error);
  // }

  // get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
  //   return this.http.get(`${environment.USER_SERVER}${path}`, {
  //     params
  //   })
  //   .pipe(catchError(this.formatErrors));
  // }

  // put(path: string, body: Object = {}): Observable<any> {
  //   return this.http.put(
  //     `${environment.USER_SERVER}${path}`,
  //     JSON.stringify(body)
  //   ).pipe(catchError(this.formatErrors));
  // }

  // post(path: string, body: Object = {}): Observable<any> {
  //   return this.http.post(
  //     `${environment.USER_SERVER}${path}`,
  //     JSON.stringify(body)
  //   ).pipe(catchError(this.formatErrors));
  // }

  // delete(path): Observable<any> {
  //   return this.http.delete(
  //     `${environment.USER_SERVER}${path}`
  //   ).pipe(catchError(this.formatErrors));
  // }

  protected post() {
    return new RequestOptions({ headers: this.headers, method: 'post' });
  }

  protected get() {
    return new RequestOptions({ headers: this.headers });
  }

  protected put() {

    return new RequestOptions({ headers: this.headers, method: 'put' });
  }

  protected patch() {
    return new RequestOptions({ headers: this.headers, method: 'patch' });
  }

}
