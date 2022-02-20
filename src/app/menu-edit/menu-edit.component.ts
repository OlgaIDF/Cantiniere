import { MealService } from './../service/meal.service';
import { Meal } from './../models/meal';
import { MenuService } from './../service/menu.service';
import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { Menu } from '../models/menu';




@Component({
  selector: 'app-menu-edit',
  templateUrl: './menu-edit.component.html',
  styleUrls: ['./menu-edit.component.css'],
})
export class MenuEditComponent implements OnInit {
  @Input()
  menu: any;
  menus: any;
  images: any;
  meals: any;
  week: number | undefined;
  dropdownSettings: IDropdownSettings = {};
  dropdownSettingsWeek: IDropdownSettings = {};

  availableForWeeks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53];
  temp_meals: any = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private menuService: MenuService,
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
    this.getMenu();


  }//ngOnInit()

  async getMenu() {
    let id = this.route.snapshot.params['id'];
    this.menu = this.menuService.getMenuById(id).subscribe((data) => {
      this.menu = data;
      console.log('Menu : ', this.menu);

      this.menuService.getMenuImage(id).subscribe((element) => {
        this.images = element;
        if (this.menu.imageId == this.images.id) {
         this.menu.image64 = this.images.image64;
        }
      });

      //MealsAll
      this.mealService.getMeals().subscribe((data) => {
        this.meals = data;
        console.log('Meals: ', this.meals);
      });


    });
  }//getMenu()

  onSubmit(f: NgForm) {
    for (let i = 0; i < this.menu.meals.length; i++) {
      this.temp_meals.push(this.meals[this.menu.meals[i].id - 1].id);//meals id bigger than index in the meals Array by 1
    }
    this.menu.mealIds = this.temp_meals;

    this.menuService.updateMenu(this.menu.id, this.menu).subscribe((data) => {
      this.menu = data;
    });

    console.log('onSubmit this.menu', this.menu);

    //this.router.navigateByUrl('menu-management');
  }
}//onSubmit()
