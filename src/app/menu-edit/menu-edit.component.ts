import { MenuService } from './../service/menu.service';
import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-menu-edit',
  templateUrl: './menu-edit.component.html',
  styleUrls: ['./menu-edit.component.css']
})
export class MenuEditComponent implements OnInit {
  @Input() menu:any;
  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private menuService:MenuService
  ) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id']; // recuperation de l'id du menu dans l'url active
    this.menu = this.menuService.getMenuById(id).subscribe(data=>{
      this.menu = data;
    }); // Recupere le menu avec l'id methode GET() + ID du menu
  }

  goBack(): void {
    this.router.navigate(['']); // fonction de redirection vers la page home
}

  onSubmit(f:NgForm){
    this.menuService.updateMenu(this.menu.id, this.menu).subscribe(data => {
      this.menu = data
    });
    console.log(this.menu);
    let link = ['/edit-menu', this.menu.id];
    this.router.navigate(link);
  }

  }

