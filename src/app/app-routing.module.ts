import { IngredientAddComponent } from './ingredient-add/ingredient-add.component';
import { IngredientEditComponent } from './ingredient-edit/ingredient-edit.component';
import { IngredientsManagementComponent } from './ingredients-management/ingredients-management.component';
import { MealAddComponent } from './meal-add/meal-add.component';
import { MealEditComponent } from './meal-edit/meal-edit.component';
import { MenuAddComponent } from './menu-add/menu-add.component';
import { MenuEditComponent } from './menu-edit/menu-edit.component';
import { MenuManagementComponent } from './menu-management/menu-management.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MealsManagementComponent } from './meals-management/meals-management.component';


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
  {
    path:'meal-management',
    component: MealsManagementComponent
  },
  {
    path:'repas/edit-meal/:id',
    component: MealEditComponent
  },

  {
    path:'meal-management/add-meal',
    component: MealAddComponent
  },
  {
    path:'ingredients-management',
    component: IngredientsManagementComponent
  },
  {
    path:'ingredients-management/edit-ingredient/:id',
    component: IngredientEditComponent
  },
  {
    path:'ingredients-management/add-ingredient',
    component: IngredientAddComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
