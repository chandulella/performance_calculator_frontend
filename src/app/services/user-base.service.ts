import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { Http, RequestOptions } from '@angular/http';
import { map, catchError } from "rxjs/operators";
import {throwError} from 'rxjs';
import { ApiServiceService } from './api.service';

@Injectable()
export class UserBaseService extends ApiServiceService {
  cookie: string;
  storage: any;
  public eventEmitter = new EventEmitter();
  constructor(public http: Http) {
    super();
   
   }

  getCpuUsage(data): Observable<any>{
    return this.http.get('http://localhost:3000/api/v1/getCpuUsage',{
  params:{
    sendmail:data
  }
  }).pipe(map(res => res.json()),catchError(err=>  throwError(err)))
  }
}
