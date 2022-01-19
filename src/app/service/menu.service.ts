import { Image } from './../models/image';
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

  getMenuById(menuId:number): Observable<Menu[]> {
    return this.http.get<any>(this.menuUrlApi+"/find/menuId");
  }

  getAllMenuForToday() : Observable<Menu[]> {
    console.log("getMenuToday : ")
    return this.http.get<Menu[]>(this.menuUrlApi+'/findallavailablefortoday');

  }

  getAllMenuForWeek(weekNumber: number){
    return this.http.get<Menu>(this.menuUrlApi+'/findallavailableforweek/' + weekNumber);
  }

  getMenuImage(menuId: number) { {
    return this.http.get<Image>(this.menuUrlApi+"/findimg/"+menuId);
 
 }
}
}
