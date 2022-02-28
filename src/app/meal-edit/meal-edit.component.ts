import { NgForm } from '@angular/forms';
import { Ingredient } from './../models/ingredient';
import { Image } from './../models/image';
import { MealService } from './../service/meal.service';
import { IngredientService } from './../service/ingredient.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-meal-edit',
  templateUrl: './meal-edit.component.html',
  styleUrls: ['./meal-edit.component.css']
})
export class MealEditComponent implements OnInit {
  @Input() meal: any;
  meals: any;
  images: any;
  ingredients: any;
  tempImg: any;
  img64: Image | undefined;
  week: number | undefined;
  category:string | undefined;
  dropdownSettings: IDropdownSettings = {};
  dropdownSettingsWeek: IDropdownSettings = {};
  dropdownSettingsCategory: IDropdownSettings = {};

  availableForWeeks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53];
  temp_meals: any = [];
  categories = [
    {id: 1, item_text: 'plats du monde' },
    { id: 2, item_text: 'entrée'},
    {id: 3, item_text:  'plats'},
    {id: 5, item_text: 'dessert' },
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
      idField: 'id',
      textField: 'item_text',
      selectAllText: 'Sélectionner tout',
      unSelectAllText: 'Désélectionner tout ',
    };
    this.getMeal();
  }//ngOnInit()

  async getMeal() {
    let id = this.route.snapshot.params['id'];
    this.meal = this.mealService.getMealById(id).subscribe((data) => {
      this.meal = data;
      console.log('Meal: ', this.meal);

      this.mealService.findImgMeal(id).subscribe((element) => {
        this.images = element;
        if (this.meal.imageId == this.images.id) {
          this.meal.image64 = this.images.image64;
        }
      });

      //IngredientsAll
      this.ingredientService.getIngredients().subscribe((data) => {
        this.ingredients = data;
        console.log('Ingredients: ', this.ingredients);
      });

    });
  }//getMeal()
  onSubmit(editMeal: NgForm) {
    console.log('onSubmit this.meal', this.meal);

    //this.router.navigateByUrl('menu-management');
}//onSubmit()


}

