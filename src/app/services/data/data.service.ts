import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { environment } from '../../../environments/environment';

@Injectable()
export class DataService {

  private _apiUrl = environment.apiUrl;

  private handleError(error: any) {
    if (error instanceof Response) {
      return Observable.throw(error.json()['error'] || 'backend server error');
    }
    return Observable.throw(error || 'backend server error');
  }
  constructor(private http: HttpClient) { }
  login(data) {
    return this.http.post(`${this._apiUrl}`, {
      auth: {
        'user': 'username',
        'pass': ''
      }
    })
      .map((response: Response) => response)
      .catch(error => this.handleError(error));
  }
  getUsers(query) {
    return this.http.get(`${this._apiUrl}search/users?q=${query}`)
      .map((response: Response) => response)
      .catch(error => this.handleError(error));
  }
  getUser(username) {
    return this.http.get(`${this._apiUrl}users/${username}`)
      .map((response: Response) => response)
      .catch(error => this.handleError(error));
  }
  getUserRepos(username) {
    return this.http.get(`${this._apiUrl}users/${username}/repos`)
      .map((response: Response) => response)
      .catch(error => this.handleError(error));
  }
}
