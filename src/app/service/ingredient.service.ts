import { Ingredient } from './../models/ingredient';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

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
    return this.http.get<any>(this.ingredientUrlApi+"/find/ingredientId");
  }

 
  findImgIngredient(ingredientId: number) { {
    return this.http.get<any>(this.ingredientUrlApi+"/findimg/"+ingredientId);
 
 }
}
}
