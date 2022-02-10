import { IngredientService } from './../service/ingredient.service';
import { MealService } from './../service/meal.service';
import { MenuService } from './../service/menu.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-management',
  templateUrl: './menu-management.component.html',
  styleUrls: ['./menu-management.component.css']
})
export class MenuManagementComponent implements OnInit {
  menus: any;
totalLength:any;
p: number = 1;


  constructor(
    private menuService: MenuService,
    private mealService: MealService,
    private ingredientService: IngredientService
  ) { }

  ngOnInit(): void {
this.getAllMenus();

  }

  getAllMenus(){
    this.menuService.getMenus().subscribe(data => {
 this.menus = data;
 this.totalLength = data.length;
console.log(data)
})


}
}
