import { MenuService } from './../service/menu.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Menu } from './../models/menu';
import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-menu-add',
  templateUrl: './menu-add.component.html',
  styleUrls: ['./menu-add.component.css']
})
export class MenuAddComponent implements OnInit {

@Input() menu: Menu = new Menu()

  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private menuService:MenuService
  ) { }

  ngOnInit(): void {
  }


  onSubmit(nf: NgForm) {

    this.menuService.addMenu(this.menu).subscribe(data => {
      this.menu = data
    });
    let link = ['/menu-add', this.menu.id];
    this.router.navigate(link);
    alert('Felicitation vous venez d\'ajouter '+ this.menu.label + ' à votre pokedex')
}
}
