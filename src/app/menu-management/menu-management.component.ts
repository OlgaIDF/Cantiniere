import { Router, ActivatedRoute } from '@angular/router';
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
categories = {
  1: 'plats du monde',
  2: 'entrée',
  3: 'plats',
  5: 'dessert',
  7: 'soupes',
  9: 'boission',
};
images: any;
menu: any;


  constructor(
    private menuService: MenuService,
    private mealService: MealService,
    private ingredientService: IngredientService,
    private router:Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
this.getAllMenus();

  }

  getAllMenus(){
    this.menuService.getMenus().subscribe(data => {
 this.menus = data;
 //this.totalLength = data.length;
console.log(data);
data.forEach((value) => {
  this.getMenuImage(value);})
})

}
async getMenuImage(menu: any) {
  this.menuService.getMenuImage(menu.id).subscribe((element) => {
    this.images = element;
    if (menu.imageId == this.images.id) {
      menu.image64 = this.images.image64;
    }
  });
}


removeMenu(id:number){
  this.menuService.deleteMenu(id).subscribe(res => {
    this.menus = this.menus.filter((item: { id: number; }) => item.id !== id);
    console.log('Menu deleted successfully!');

})
}
}
