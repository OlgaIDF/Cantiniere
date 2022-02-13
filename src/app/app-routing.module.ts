import { MenuAddComponent } from './menu-add/menu-add.component';
import { MenuEditComponent } from './menu-edit/menu-edit.component';
import { MenuManagementComponent } from './menu-management/menu-management.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'menu-management',
    component: MenuManagementComponent
  },
  {
    path:'menu-management/edit-menu/:id',
    component: MenuEditComponent
  },
  {
    path:'menu-management/add-menu',
    component: MenuAddComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
