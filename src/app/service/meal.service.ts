import { Image } from './../models/image';
import { Meal } from './../models/meal';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MealService {
  mealUrlApi = 'http://localhost:8080/lunchtime/meal';

  constructor(private http: HttpClient) { }
  getMeals(): Observable<Meal[]> {
    return this.http.get<Meal[]>(this.mealUrlApi + '/findall');
  }

  getMealById(id: number) {

    const url = `${this.mealUrlApi}/find/${id}`;
    return this.http.get<Meal>(url);
  }

  getAllMealForToday(): Observable<Meal[]> {
    console.log("getMenuToday : ")
    return this.http.get<Meal[]>(this.mealUrlApi + '/findallavailablefortoday');

  }

  getAllMealForWeek(weekNumber: number) {
    return this.http.get<Meal>(this.mealUrlApi + '/findallavailableforweek/' + weekNumber);
  }

  findImgMeal(mealId: number) {
    {
      return this.http.get<any>(this.mealUrlApi + "/findimg/" + mealId);
    }
  }
  updateMeal(mealId: number, meal: Meal): Observable<Meal> {

    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
    return this.http.patch<Meal>(this.mealUrlApi + '/update/' + mealId, meal, httpOptions);  //retourne un observable (requete asynchrone de type delete)
  }
  updateImageMeal(mealId: number, image: Image): Observable<Image> {

    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
    return this.http.patch<Image>(this.mealUrlApi + '/updateimg/' + mealId, image, httpOptions);
  }
  addMeal(meal: Meal) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
    return this.http.put<Meal>(this.mealUrlApi + "/add", meal, httpOptions);   //retourne un observable (requete asynchrone de type delete)
  }

  deleteMeal(mealId: number) {

    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
    return this.http.delete<Meal>(this.mealUrlApi + '/delete/' + mealId, httpOptions);

  }
}
