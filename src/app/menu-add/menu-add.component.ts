import { Image } from './../models/image';
import { MealService } from './../service/meal.service';
import { Meal } from './../models/meal';
import { MenuService } from './../service/menu.service';
import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { Menu } from '../models/menu';

@Component({
  selector: 'app-menu-add',
  templateUrl: './menu-add.component.html',
  styleUrls: ['./menu-add.component.css']
})
export class MenuAddComponent implements OnInit {

  @Input() menu: Menu = new Menu()
  menus: any;
  images: any;
  meals: any;
  tempImg: any;
  img64: Image | undefined;
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

    //MealsAll
    this.mealService.getMeals().subscribe((data) => {
      this.meals = data;
      console.log('Meals: ', this.meals);
    });
    this.menuService.getMenus().subscribe(data => {
      this.menus = data;
      console.log('Meals: ', this.menus);
    })



  }//ngOnInit()


  onSubmit(addform: NgForm) {

    console.log('this menus length', this.menus.length);

    for (let i = 0; i < this.menu.meals.length; i++) {
      this.menu.mealIds.push(this.meals[this.menu.meals[i].id - 1].id);//meals id bigger than index in the meals Array by 1
    }
    let filePathTemp = 'img' + '/pict_' + Math.floor(Math.random() * (800 + 1)) + '.png';
    console.log('filepathe temp', filePathTemp);

    this.img64 = new Image(filePathTemp, this.menu.image64);
    this.menu.image = this.img64;
    this.menu.filePath = filePathTemp;

    this.menu.image64 = this.img64.image64;
    this.menu.imageId = this.menus.length;

    this.menuService.addMenu(this.menu).subscribe(data => {
      this.menu = data;
    });
    console.log('onSubmit this.menu', this.menu);

    this.router.navigateByUrl('menu-management');
    alert('Felicitation vous venez d\'ajouter '+ this.menu.label + ' à vos menus')

  }//onSubmit()



}

