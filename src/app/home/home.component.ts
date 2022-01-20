import { Meal } from './../models/meal';
import { MealService } from './../service/meal.service';
import { Menu } from './../models/menu';
import { MenuService } from './../service/menu.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  menus: any;

  // Pour initialiser le numéro de la semaine
  weekNumber: any;
  dateWeek = new Date();
  yearStart: any;
  listMenuThisWeek: any;
  listMenuToday: any;
  images: any;

  mealList: any = [];


  constructor(
    private menuService: MenuService,
    private mealService: MealService
  ) { }

  async ngOnInit(): Promise<void> {
    this.getWeekNumber(this.dateWeek);
    this.getAllMenuForToday();
    this.getAllMealForToday();

    //this.getAllMenuForWeek();



    // this.menuService.getMenus().subscribe(data => {
    //   this.menus = data;
    //   console.log(data)


    //   // this.menuService.getMenuImage(this.menus.imageI)
    //   // .subscribe((resultImg:Image)=>{
    //   //   this.menus.src=resultImg.image64
    //   //   console.log(this.menus.id) 
    //   // })



    // });

  }
  async getAllMenuForToday() {
    this.menuService.getAllMenuForToday()
      .subscribe(
        response => {
          this.listMenuToday = response;
          for (let i = 0; i < this.listMenuToday.length; i++) {
            //    console.log('this.meal[i].id', this.mealList[i].id)
            this.getMenuImage(this.listMenuToday[i]);

          } 
          console.log('listMenuToday: ', this.listMenuToday);
        }
      );
  }



  async getAllMealForToday() {
    this.mealService.getAllMealForToday()
      .subscribe(
        response => {
          this.mealList = response;
          //  console.log('mealList: ', this.mealList);
          for (let i = 0; i < this.mealList.length; i++) {
            //    console.log('this.meal[i].id', this.mealList[i].id)
            this.getMealImage(this.mealList[i]);

          }
        }
      );
  }
  // async getAllMenuForWeek() {
  //   this.menuService.getAllMenuForWeek(this.weekNumber).subscribe(response => {
  //     this.menus = response;
  //     console.log('listMenuThisWeek: ', this.menus);} ); }
  /**
     * image meals de la semaine
  */  

 
  async getMealImage(meal: any) {

    this.mealService.findImgMeal(meal.id).subscribe(element => {
      this.images = element;
      if (meal.imageId == this.images.id) {
        meal.image64 =  this.images.image64;
      }
      
    });
  }

  async getMenuImage(menu: any) {

    this.menuService.getMenuImage(menu.id).subscribe(element => {
      this.images = element;
      if (menu.imageId == this.images.id) {
        menu.image64 =  this.images.image64;
      }
      
    });
  }
  // Méthode pour récupérer le numéro de la semaine actuelle
  getWeekNumber(dateWeek: any) {
    dateWeek = new Date(Date.UTC(dateWeek.getFullYear(), dateWeek.getMonth(), dateWeek.getDate()));
    dateWeek.setUTCDate(dateWeek.getUTCDate() + 4 - (dateWeek.getUTCDay() || 7));
    this.yearStart = new Date(Date.UTC(dateWeek.getUTCFullYear(), 0, 1));
    this.weekNumber = Math.ceil((((dateWeek - this.yearStart) / 86400000) + 1) / 7);
    console.log('Date de la semaine : ' + dateWeek.getUTCFullYear(), this.weekNumber);

    return this.weekNumber;
  }

}


