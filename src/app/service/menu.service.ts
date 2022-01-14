import { Menu } from './../models/menu';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MenuService {
menuUrlApi = 'http://localhost:8080/lunchtime/menu';

  constructor(private http: HttpClient) { }

  getMenus(): Observable<Menu[]> {
    return this.http.get<Menu[]>(this.menuUrlApi+'/findall');
  }

getImageMenu(id:number) {
  const url = `${this.menuUrlApi+'/findimage'}/${id}`;
  return this.http.get<Menu>(url);
}

}

