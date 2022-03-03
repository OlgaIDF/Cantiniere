import { Image } from './../models/image';
import { Ingredient } from './../models/ingredient';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {
  ingredientUrlApi = 'http://localhost:8080/lunchtime/ingredient';
  constructor(private http: HttpClient) { }


  getIngredients(): Observable<Ingredient[]> {
    return this.http.get<Ingredient[]>(this.ingredientUrlApi+'/findall');
  }

  getIngredientById(ingredientId:number): Observable<Ingredient[]> {
    return this.http.get<any>(this.ingredientUrlApi+"/find/" +ingredientId);
  }


  findImgIngredient(ingredientId: number) { {
    return this.http.get<any>(this.ingredientUrlApi +"/findimg/" + ingredientId);

 }
}
updateIngredient(ingredientId: number, ingredient: Ingredient): Observable<Ingredient> {

  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }
  return this.http.patch<Ingredient>(this.ingredientUrlApi + '/update/' + ingredientId, ingredient, httpOptions);  //retourne un observable (requete asynchrone de type delete)
}
updateImageIngredient(ingredientId: number, image: Image): Observable<Image> {

  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }
  return this.http.patch<Image>(this.ingredientUrlApi + '/updateimg/' + ingredientId, image, httpOptions);
}
addIngredient(ingredient: Ingredient) {
  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }
  return this.http.put<Ingredient>(this.ingredientUrlApi + "/add", ingredient, httpOptions);   //retourne un observable (requete asynchrone de type delete)
}

deleteIngredient(ingredientId: number) {

  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }
  return this.http.delete<Ingredient>(this.ingredientUrlApi + '/delete/' + ingredientId, httpOptions);

}









}
