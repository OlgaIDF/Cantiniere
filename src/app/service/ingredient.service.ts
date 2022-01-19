import { Ingredient } from './../models/ingredient';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {
  ingredientUrlApi = 'http://localhost:8080/lunchtime/menu';
  constructor(private http: HttpClient) { }

  
  getIngredients(): Observable<Ingredient[]> {
    return this.http.get<Ingredient[]>(this.ingredientUrlApi+'/findall');
  }

  getIngredientById(ingredientId:number): Observable<Ingredient[]> {
    return this.http.get<any>(this.ingredientUrlApi+"/find/ingredientId");
  }

  getAllIngredientForToday() : Observable<Ingredient[]> {
    console.log("getMenuToday : ")
    return this.http.get<Ingredient[]>(this.ingredientUrlApi+'/findallavailablefortoday');

  }

  getAllIngredientForWeek(weekNumber: number){
    return this.http.get<Ingredient>(this.ingredientUrlApi+'/findallavailableforweek/' + weekNumber);
  }

  getIngredientImage(ingredientId: number) { {
    return this.http.get<any>(this.ingredientUrlApi+"/findimg/"+ingredientId);
 
 }
}
}
