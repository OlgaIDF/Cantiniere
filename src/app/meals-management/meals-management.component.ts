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
categories = {
  1: 'plats du monde',
  2: 'entrée',
  3: 'plats',
  5: 'dessert',
  7: 'soupes',
  9: 'boission',
};
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

    // removeMenu(id:number){
    //   this.menuService.deleteMenu(id).subscribe(res => {
    //     this.menus = this.menus.filter((item: { id: number; }) => item.id !== id);
    //     console.log('Menu deleted successfully!');

    // })
    // }
    }
