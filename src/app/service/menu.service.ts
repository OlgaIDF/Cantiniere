import { Image } from './../models/image';
import { Menu } from './../models/menu';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MenuService {
  menu: Menu = new Menu();
  menuUrlApi = 'http://localhost:8080/lunchtime/menu';

  constructor(private http: HttpClient) { }

  getMenus(): Observable<Menu[]> {
    return this.http.get<Menu[]>(this.menuUrlApi + '/findall');
  }

  getMenuById(id: number) {

    const url = `${this.menuUrlApi}/find/${id}`;
    return this.http.get<Menu>(url);
  }

  getAllMenuForToday(): Observable<Menu[]> {
    console.log("getMenuToday : ")
    return this.http.get<Menu[]>(this.menuUrlApi + '/findallavailablefortoday');

  }

  getAllMenuForWeek(weekNumber: number) {
    return this.http.get<Menu>(this.menuUrlApi + '/findallavailableforweek/' + weekNumber);
  }

  getMenuImage(menuId: number) {
    {
      return this.http.get<any>(this.menuUrlApi + "/findimg/" + menuId);
    }
  }
  addMenu(menu: Menu) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
    return this.http.put<Menu>(this.menuUrlApi + "/add", menu, httpOptions);   //retourne un observable (requete asynchrone de type delete)
  }


  updateMenu(menuId: number, menu: Menu): Observable<Menu> {

    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }) //indique le type de données envoyées
    }
    return this.http.patch<Menu>(this.menuUrlApi + '/update/' + menuId, menu, httpOptions);  //retourne un observable (requete asynchrone de type delete)
  }

  updateImageMenu(imageId: number, image: Image): Observable<Image> {

    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }) //indique le type de données envoyées
    }
    return this.http.patch<Image>(this.menuUrlApi + '/updateimg/' + imageId, image, httpOptions);  //retourne un observable (requete asynchrone de type delete)
  }

  deleteMenu(menuId:number){

    const httpOptions ={headers: new HttpHeaders({'Content-Type':'application/json'})
  }
     return this.http.delete<Menu>(this.menuUrlApi + '/delete/' + menuId, httpOptions);

}
}
