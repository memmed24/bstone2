import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { CookieService } from './cookie.service';

@Injectable()
export class ProjectService {

  private header: Headers;

  constructor(
    private http: Http,
    private cookie: CookieService
  ) { }

  
  getProjcets(page: number){
    return this.http.get(`${environment.url}/projects?page=${page}`)
      .map(res => res.json());
  }

  create(data: any){
    this.header = new Headers();
    let token = this.cookie.read('token');
    this.header.append('api_token', token);
    return this.http.post(`${environment.url}/projects`, data, {
      headers: this.header
    }).map(res => res.json());
  }

  delete(id: number){
    this.header = new Headers();
    let token = this.cookie.read('token');
    this.header.append('api_token', token);
    return this.http.get(`${environment.url}/project/remove/${id}`, {
      headers: this.header
    }).map(res => res.json());
  }

}
