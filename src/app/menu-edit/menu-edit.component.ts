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
  mealsSelected: Meal[] = [];
  meals: any;
  dropdownSettings: IDropdownSettings = {};
  dropdownList = [];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private menuService: MenuService,
    private mealService: MealService
  ) {}

  ngOnInit(): void {
    this.getMenu();
  }

  goBack(): void {
    this.router.navigate(['']); // fonction de redirection vers la page home
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
        console.log('Meals: ', this.meals );

        //MealsSelected
        if (this.menu['meals'] !== undefined) {
          this.menu['meals'].forEach((element: Meal) => {
            this.mealsSelected.push(element);
          });
          console.log('Selected meals:', this.mealsSelected);
        }





        // this.dropdownList = [
        //   { item_id: this.meals.id, item_text: this.meals.label },
        // ];

        //console.log('dropdownList: ', this.meals.id);
        this.dropdownSettings = {
          idField: 'meals.id',
          textField: 'meals.label',
        };


        //   this.dropdownSettings = {
        //     idField: 'meals.id',
        //     textField: 'meals.label',
        //   };
        //  console.log(this.meals);
      });
    });
  }

  onSubmit(f: NgForm) {
    this.menuService.updateMenu(this.menu.id, this.menu).subscribe((data) => {
      this.menu = data;
    });
    console.log(this.menu);
    let link = ['/management-menu'];
    this.router.navigate(link);
  }
}
