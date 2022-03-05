import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const url = 'http://localhost:8080/lunchtime/';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  /* tout les utilisateurs , peut etre a supprimer
  getPublicContent(): Observable<any> {
    return this.http.get(url + 'all', { responseType: 'text' });
  }*/

  getUserBoard(): Observable<any> {
    return this.http.get(url + 'user', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(url + 'admin', { responseType: 'text' });
  }
}

