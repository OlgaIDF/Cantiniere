import { MenuEditComponent } from './menu-edit/menu-edit.component';
import { MenuManagementComponent } from './menu-management/menu-management.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'register',
    component: RegisterComponent
  },
  {
    path:'forget-password',
    component: ForgetPasswordComponent
  },
  {
    path:'admin',
    component: BoardAdminComponent
  },
  {
    path:'user',
    component: BoardUserComponent
  },
  {
    path:'menu-management',
    component: MenuManagementComponent
  },
  {
    path:'menu-management/edit-menu/:id',
    component: MenuEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
