import { IngredientService } from './../service/ingredient.service';
import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { Image } from './../models/image';
import { MealService } from './../service/meal.service';
import { Meal } from './../models/meal';

@Component({
  selector: 'app-meal-add',
  templateUrl: './meal-add.component.html',
  styleUrls: ['./meal-add.component.css']
})
export class MealAddComponent implements OnInit {

  @Input() meal: Meal = new Meal()
  meals: any;
  images: any;
  ingredients: any = [];
  tempImg: any;
  img64: Image | undefined;
  week: number | undefined;
  category: any;
  dropdownSettings: IDropdownSettings = {};
  dropdownSettingsWeek: IDropdownSettings = {};
  dropdownSettingsCategory: IDropdownSettings = {};
  categorySelected: any;

  availableForWeeks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53];
  temp_ingredients: any = [];
  categories = [
    { id: 1, item_text: 'plats du monde' },
    { id: 2, item_text: 'entrée' },
    { id: 3, item_text: 'plats' },
    { id: 5, item_text: 'dessert' },
    { id: 7, item_text: 'soupes' },
    { id: 7, item_text: 'boission' }

  ];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
private ingredientService: IngredientService,
    private mealService: MealService
  ) { }


  ngOnInit(): void {
    this.dropdownSettings = {

      idField: 'id',
      textField: 'label',
      selectAllText: 'Sélectionner tout',
      unSelectAllText: 'Désélectionner tout ',
    };

    this.dropdownSettingsWeek = {
      idField: 'id',
      textField: 'weekNumber',
      selectAllText: 'Sélectionner tout',
      unSelectAllText: 'Désélectionner tout ',
    };
    this.dropdownSettingsCategory = {
      singleSelection: true,
      idField: 'id',
      textField: 'item_text',
      selectAllText: 'Sélectionner tout',
      unSelectAllText: 'Désélectionner tout ',
    };
     //IngredientsAll
      this.ingredientService.getIngredients().subscribe((data) => {
        this.ingredients = data;
        console.log('Ingredients: ', this.ingredients);
      });
   //MealsAll
    this.mealService.getMeals().subscribe((data) => {
      this.meals = data;
      console.log('Meals: ', this.meals);
    });



  }//ngOnInit()

  onSubmit(addMeal: NgForm) {

    this.meal.ingredients.forEach(element => {
      this.meal.ingredientsId.push(element.id);
    });

this.meal.category = this.categorySelected[0].id;
   console.log('this.meal.category', this.meal.category)


    let filePathTemp = 'img' + '/pict_' + Math.floor(Math.random() * (800 + 1)) + '.png';
    console.log('filepathe temp', filePathTemp);

    this.img64 = new Image(filePathTemp, this.meal.image64);
    this.meal.image = this.img64;
    this.meal.filePath = filePathTemp;

    this.meal.image64 = this.img64.image64;
    this.meal.imageId = this.meals.length;

    let tempCategory;
    this.mealService.addMeal(this.meal).subscribe(data => {
      this.meal = data;
    });

    console.log('onSubmit this.meal', this.meal);

    this.router.navigateByUrl('meal-management');
    alert('Felicitation vous venez d\'ajouter '+ this.meal.label + ' à vos plats')

  }//onSubmit()



}
