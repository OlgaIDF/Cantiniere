import { IngredientService } from './../service/ingredient.service';
import { Meal } from './../models/meal';
import { MealService } from './../service/meal.service';
import { Menu } from './../models/menu';
import { MenuService } from './../service/menu.service';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  content?: string;

  menus: any;

  // Pour initialiser le numéro de la semaine
  weekNumber: any;
  dateWeek = new Date();
  yearStart: any;
  listMenuThisWeek: any;
  listMenuToday: any;
  images: any;
  mealList: any = [];
  ingredients: any = [];
  mainMenu: any = [6];

  categories = {
    1: 'plats du monde',
    2: 'entrée',
    3: 'plats',
    5: 'dessert',
    7: 'soupes',
    9: 'boission',
  };

  constructor(
    private menuService: MenuService,
    private mealService: MealService,
    private ingredientService: IngredientService,
    private userService: UserService
  ) {}

  async ngOnInit(): Promise<void> {
    this.getWeekNumber(this.dateWeek);
    this.getAllMenuForToday();
    this.getAllMealForToday();

    //this.getAllMenuForWeek();

    this.userService.getPublicContent().subscribe({
      next: data => {
        this.content = data;
      },
      error: err => {
        this.content = JSON.parse(err.error).message;
      }
    })

  }
  async getAllMenuForToday() {
    this.menuService.getAllMenuForToday().subscribe((response) => {
      this.listMenuToday = response;

      //s'il n'y a pas de plat dans le menu, supprimez-le de la liste d'affichage
      console.log('listMenuToday before all operations: ', this.listMenuToday.length);

      response.forEach((value,index) => {
        if (value == undefined ||
          value.meals == undefined) {
          console.log('splice empty menu', value);
          this.listMenuToday.splice(index, 1);
          console.log('listMenuToday after splice: ', this.listMenuToday);
        } else {
          this.getMenuImage(value);
          //console.log('this.listMenuToday[i].meals.length: ', this.listMenuToday[i].meals.length);

          for (let j = 0; j < value.meals.length; j++) {
            this.getMealImage(value.meals[j]);
            // console.log('j: ', j);
          }
        }
      });

      for (let g = 0; g < this.listMenuToday.length; g++) {
        if (this.listMenuToday[g] == undefined ||
          this.listMenuToday[g].meals == undefined) {
          console.log('splice empty menu', this.listMenuToday[g]);
          this.listMenuToday.splice(g, 1);
          console.log('listMenuToday after splice: ', this.listMenuToday);
        } else {
          this.getMenuImage(this.listMenuToday[g]);
          //console.log('this.listMenuToday[i].meals.length: ', this.listMenuToday[i].meals.length);

          for (let j = 0; j < this.listMenuToday[g].meals.length; j++) {
            this.getMealImage(this.listMenuToday[g].meals[j]);
            // console.log('j: ', j);
          }
        }
      }
      console.log('listMenuToday: ', this.listMenuToday);
    });
  }

  async getAllMealForToday() {
    this.mealService.getAllMealForToday().subscribe((response) => {
      this.mealList = response;
      //console.log('mealList: ', this.mealList);

      for (let i = 0; i < this.mealList.length; i++) {
        //    console.log('this.meal[i].id', this.mealList[i].id)
        if (this.mealList[i] != undefined) {
          this.getMealImage(this.mealList[i]);
          //console.log('this.mealList[i].ingredients.length: ', this.mealList[i].ingredients);

          if (this.mealList[i].ingredients != undefined) {
            for (let j = 0; j < this.mealList[i].ingredients.length; j++) {
              this.getIngredientImage(this.mealList[i].ingredients[j]);
              //console.log('j: ', j);
            }
          }
        }
      }
    });
  }

  // async getAllMenuForWeek() {
  //   this.menuService.getAllMenuForWeek(this.weekNumber).subscribe(response => {
  //     this.menus = response;
  //     console.log('listMenuThisWeek: ', this.menus);} ); }
  /**
   * image meals de la semaine
   */

  async getMenuImage(menu: any) {
    this.menuService.getMenuImage(menu.id).subscribe((element) => {
      this.images = element;
      if (menu.imageId == this.images.id) {
        menu.image64 = this.images.image64;
      }
    });
  }
  async getMealImage(meal: any) {
    this.mealService.findImgMeal(meal.id).subscribe((element) => {
      this.images = element;
      if (meal.imageId == this.images.id) {
        meal.image64 = this.images.image64;
      }
    });
  }

  async getIngredientImage(ingredient: any) {
    this.ingredientService
      .findImgIngredient(ingredient.id)
      .subscribe((element) => {
        this.images = element;
        if (ingredient.imageId == this.images.id) {
          ingredient.image64 = this.images.image64;
        }
      });

    console.log(ingredient.image64);
  }
  // Méthode pour récupérer le numéro de la semaine actuelle
  getWeekNumber(dateWeek: any) {
    dateWeek = new Date(
      Date.UTC(dateWeek.getFullYear(), dateWeek.getMonth(), dateWeek.getDate())
    );
    dateWeek.setUTCDate(
      dateWeek.getUTCDate() + 4 - (dateWeek.getUTCDay() || 7)
    );
    this.yearStart = new Date(Date.UTC(dateWeek.getUTCFullYear(), 0, 1));
    this.weekNumber = Math.ceil(
      ((dateWeek - this.yearStart) / 86400000 + 1) / 7
    );
    console.log(
      'Date de la semaine : ' + dateWeek.getUTCFullYear(),
      this.weekNumber
    );

    return this.weekNumber;
  }

  getMealCategory(category_id: number) {
    if (category_id == 2) {
    }
  }
}
