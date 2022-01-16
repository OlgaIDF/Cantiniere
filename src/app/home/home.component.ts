import { Image } from './../models/image';
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
  listMenuThisWeek:any;
  listMenuToday: any;
  images: any;
  

  constructor(
    private menuService: MenuService
    
    ) { }

  ngOnInit(): void {
    this.getWeekNumber(this.dateWeek);
    // this.menuService.getMenus().subscribe(data => {

    //   this.menus = data;
    //   console.log(data)
      

    //   // this.menuService.getMenuImage(this.menus.imageI)
    //   // .subscribe((resultImg:Image)=>{
    //   //   this.menus.src=resultImg.image64
    //   //   console.log(this.menus.id) 
    //   // })
        
     

    // });

       this.menuService.getAllMenuForWeek(this.weekNumber).subscribe(response => {
          this.menus= response;
          console.log('listMenuThisWeek: ', this.menus);

        }

      );
     
        this.menuService.getAllMenuForToday()
          .subscribe(
            response => {
              this.listMenuToday = response;
              console.log('listMenuToday: ', this.listMenuToday);
            }
          );
      this.menuService.getMenuImage(75).subscribe(response => {
        this.images= response;
        console.log(response)
  } );
} 
 
  
// Méthode pour récupérer le numéro de la semaine actuelle
getWeekNumber(dateWeek:any) {
  dateWeek = new Date(Date.UTC(dateWeek.getFullYear(), dateWeek.getMonth(), dateWeek.getDate()));
  dateWeek.setUTCDate(dateWeek.getUTCDate() + 4 - (dateWeek.getUTCDay() || 7));
  this.yearStart = new Date(Date.UTC(dateWeek.getUTCFullYear(), 0, 1));
  this.weekNumber = Math.ceil((((dateWeek - this.yearStart) / 86400000) + 1) / 7);
  console.log('Date de la semaine : ' + dateWeek.getUTCFullYear(), this.weekNumber);

  return this.weekNumber;
}

}


