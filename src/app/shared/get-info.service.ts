import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions } from "@angular/http";
import 'rxjs/add/operator/map';
import {Observable} from "rxjs";

@Injectable()
export class GetInfoService {

  
  private url: string = "https://api.github.com";
  
  constructor (private http: Http) { }

  // Получаем json
  get(endPoint: string): Observable<Response> {
    return this.http.get(this.createUrl(endPoint));
  }

  getWithParams(endPoint: string, options?: object): Observable<Response> {
    let param = new RequestOptions(options);
    return this.http.get(this.createUrl(endPoint), param);
  }

  getByLink(url: string): Observable<Response> {
    return this.http.get(url);
  }

  // Приводим ссылку к нужному виду
  createUrl(endPoint): string {

    let url = this.url + endPoint;
    if (!endPoint.startsWith('/')) {
        url = this.url + '/' + endPoint;
    }

    return url;
  }

}
