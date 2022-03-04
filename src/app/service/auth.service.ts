import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const url = 'http://localhost:8080/lunchtime/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  //login(email: string, password: string): Observable<any> {
  //  return this.http.post(url + 'login', {email, password }, httpOptions);
  //}

  login(email: string, password: string): Observable<any> {
    return  this.http.post(url+"login", {email, password }, { observe: 'response' });
  }

  register(name: string,firstname: string, address: string, postalCode: string, town: string, phone: string, sex: number, isLunchLady:number, wallet: number, image64: string ,email: string, password: string): Observable<any> {
    return this.http.put(url + 'user/register', {
      name,
      firstname,
      address,
      postalCode,
      town,
      phone,
      sex,
      isLunchLady,
      wallet,
      image64,
      email,
      password
    }, httpOptions);
  }
}
