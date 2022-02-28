import { Image } from './../models/image';
import { Meal } from './../models/meal';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MealService {
  mealUrlApi = 'http://localhost:8080/lunchtime/meal';

  constructor(private http: HttpClient) { }
  getMeals(): Observable<Meal[]> {
    return this.http.get<Meal[]>(this.mealUrlApi+'/findall');
  }

  getMealById  (id: number) {

    const url = `${this.mealUrlApi}/find/${id}`;
    return this.http.get<Meal>(url);
  }

  getAllMealForToday() : Observable<Meal[]> {
    console.log("getMenuToday : ")
    return this.http.get<Meal[]>(this.mealUrlApi+'/findallavailablefortoday');

  }

  getAllMealForWeek(weekNumber: number){
    return this.http.get<Meal>(this.mealUrlApi+'/findallavailableforweek/' + weekNumber);
  }

  findImgMeal(mealId: number) { {
    return this.http.get<any>(this.mealUrlApi+"/findimg/"+mealId);
 }
}


}
