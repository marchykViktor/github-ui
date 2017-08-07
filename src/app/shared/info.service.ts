import { Injectable } from '@angular/core';
import { URLSearchParams } from '@angular/http';
import {Observable} from "rxjs";
import { User, Repo, GetInfoService } from "../index";

@Injectable()
export class InfoService {

  constructor(private getInfo: GetInfoService) { }

  getUsers(): Observable<User[]> {

      let endPoint = '/users';

      return this.getInfo.get(endPoint).map(res => res.json() as User[]).catch(err => Observable.throw(err));
  }

  getUser(login: string): Observable<User[]> {

      let endPoint = '/users/'+ login;
      
      return this.getInfo.get(endPoint).map(res => res.json() as User[]).catch(err => Observable.throw(err));
  }

  getRepo(login: string): Observable<Repo[]> {

      let endPoint = '/users/'+ login + '/repos';

      return this.getInfo.get(endPoint).map(res => res.json() as Repo[]).catch(err => Observable.throw(err));
  }

  getRepoNextPage(login: string, page: string): Observable<User[]> {

      let endPoint = '/users/'+ login + '/repos',
          search   = new URLSearchParams(page),
          pageObj  = { search: search };

      return this.getInfo.getWithParams(endPoint, pageObj).map(res => res.json() as User[]).catch(err => Observable.throw(err));
  }
  
  getRepoDetails(login: string, repo_name: string): Observable<Repo[]> {

      let endPoint = '/repos/'+ login + '/' + repo_name;
      
      return this.getInfo.get(endPoint).map(res => res.json() as Repo[]).catch(err => Observable.throw(err));
  }

  getRepoFiles(url: string): Observable<Repo[]> {

      return this.getInfo.getByLink(url).map(res => res.json() as Repo[]).catch(err => Observable.throw(err));
  }

  getRepoList(login: string, repo_name: string): Observable<Repo[]> {

      let endPoint = '/repos/'+ login + '/' + repo_name + '/contents';
      
      return this.getInfo.get(endPoint).map(res => res.json() as Repo[]).catch(err => Observable.throw(err));
  }
  getComits(login: string, repo_name: string): Observable<Repo[]> {

      let endPoint = '/repos/'+ login + '/' + repo_name + '/commits';
      
      return this.getInfo.get(endPoint).map(res => res.json() as Repo[]).catch(err => Observable.throw(err));
  }
  getComitsNextPage(login: string, repo_name: string, page: string){
    let   endPoint = '/repos/'+ login + '/' + repo_name + '/commits',
          search   = new URLSearchParams(page),
          pageObj  = { search: search };

    return this.getInfo.getWithParams(endPoint, pageObj).map(res => res.json() as Repo[]).catch(err => Observable.throw(err));
  }
}
