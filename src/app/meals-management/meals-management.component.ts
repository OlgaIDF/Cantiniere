import { Router, ActivatedRoute } from '@angular/router';
import { IngredientService } from './../service/ingredient.service';
import { MealService } from './../service/meal.service';
import { MenuService } from './../service/menu.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meals-management',
  templateUrl: './meals-management.component.html',
  styleUrls: ['./meals-management.component.css']
})
export class MealsManagementComponent implements OnInit {
meals:any;
p: number = 1;
totalLength:any;

images: any;
  constructor(
    private menuService: MenuService,
    private mealService: MealService,
    private ingredientService: IngredientService,
    private router:Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {

    this.getAllMeals()

      }

    getAllMeals(){
      this.mealService.getMeals().subscribe(data => {
    this.meals = data;
    //this.totalLength = data.length;
    console.log(data);
    data.forEach((value) => {
    this.getMealImage(value);})
    })
    }
    async getMealImage(meal: any) {
      this.mealService.findImgMeal(meal.id).subscribe((element) => {
        this.images = element;
        if (meal.imageId == this.images.id) {
          meal.image64 = this.images.image64;
        }
      });
    }

    removeMeal(id:number){
      this.mealService.deleteMeal(id).subscribe(res => {
        this.meals = this.meals.filter((item: { id: number; }) => item.id !== id);
        console.log('Meal deleted successfully!');

    })
    }
    }
