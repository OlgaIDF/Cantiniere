import { MealsManagementComponent } from './meals-management/meals-management.component';
import { MenuService } from './service/menu.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { DigitalClockComponent } from './digital-clock/digital-clock.component';
import { MenuManagementComponent } from './menu-management/menu-management.component';
import { MenuEditComponent } from './menu-edit/menu-edit.component';
import { MenuAddComponent } from './menu-add/menu-add.component';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { MealEditComponent } from './meal-edit/meal-edit.component';
import { MealAddComponent } from './meal-add/meal-add.component';
import { IngredientsManagementComponent } from './ingredients-management/ingredients-management.component';
import { IngredientEditComponent } from './ingredient-edit/ingredient-edit.component';
import { IngredientAddComponent } from './ingredient-add/ingredient-add.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    DigitalClockComponent,
    MenuManagementComponent,
    MenuEditComponent,
    MenuAddComponent,
    MealsManagementComponent,
    MealEditComponent,
    MealAddComponent,
    IngredientsManagementComponent,
    IngredientEditComponent,
    IngredientAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    NgMultiSelectDropDownModule.forRoot(),
  ],
  providers: [MenuService],
  bootstrap: [AppComponent],
})
export class AppModule {}
