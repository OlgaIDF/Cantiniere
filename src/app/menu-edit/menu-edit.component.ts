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
  images: any;
  meals: any;
  dropdownSettings: IDropdownSettings = {};
  defaultMealsMenu: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private menuService: MenuService,
    private mealService: MealService
  ) { }

  ngOnInit(): void {
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'label',
      selectAllText: 'Sélectionner tout',
      unSelectAllText: 'Désélectionner tout ',
    };
    this.getMenu();
  }

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
  }

  onSubmit(f: NgForm) {
    // this.menuService.updateMenu(this.menu.id, this.menu).subscribe((data) => {
    //   this.menu = data;
    // });

   

    console.log(this.menu);

    //this.router.navigateByUrl('menu-management');
  }
}
