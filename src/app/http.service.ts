import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
// import { CookieService } from 'angular2-cookie/core';

import { Api } from './api.interface';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  private token;

  constructor(private http: HttpClient) { }

  getHeaders() {
    this.headers = new HttpHeaders({
     'Content-Type': 'application/json'
    });
    return this.headers;
  }

  call(api: Api, data?: any) {
    if (data) {
      if (api.method === 'PUT' || api.method === 'DELETE') {
        api.url = `${api.url}${data.id}`;
      }
      const headers = this.getHeaders();
      return this.http
      [api.method]
        (api.url, data, { headers: headers })
        .toPromise()
        .then(this.successHandler.bind(this))
        .catch(this.errorHandler.bind(this));
    } else {
      return this.http
      [api.method]
        (api.url, { headers: this.headers })
        .toPromise()
        .then(this.successHandler.bind(this))
        .catch(this.errorHandler.bind(this));
    }
  }


  /**
* ==============================
*          Helper Methods
*  ==============================
*  */

  successHandler(res) {
    // console.log(res.headers.get('auth_token'))
    return Promise.resolve(res);
  }

  errorHandler(res) {
    // if (res.error && res.error.code !== 200) {
    return Promise.reject(res);
    // }
  }
}