import { MenuService } from './../service/menu.service';
import { Component, OnInit } from '@angular/core';
import { Menu } from '../models/menu';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
menus: any;
  constructor(private dataService: MenuService) { }

  ngOnInit(): void {
    this.dataService.getMenus().subscribe(data => {

      this.menus = data;
      console.log(data)


    })

  }

}
