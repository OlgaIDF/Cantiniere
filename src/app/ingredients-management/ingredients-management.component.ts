import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IngredientService } from './../service/ingredient.service';

@Component({
  selector: 'app-ingredients-management',
  templateUrl: './ingredients-management.component.html',
  styleUrls: ['./ingredients-management.component.css']
})
export class IngredientsManagementComponent implements OnInit {
  ingredients: any;
  images: any;
  totalLength:any;
  p: number = 1;
  constructor(
    private ingredientService: IngredientService,
    private router: Router,
    private route: ActivatedRoute,) {

  }

  ngOnInit(): void {
    this.getAllIngredients();
  }

  getAllIngredients(){
    this.ingredientService.getIngredients().subscribe(data => {
 this.ingredients = data;
 //this.totalLength = data.length;
console.log(data);
data.forEach((value) => {
  this.getIngredientImage(value);})
})

}
async getIngredientImage(ingredient: any) {
  this.ingredientService.findImgIngredient(ingredient.id).subscribe((element) => {
    this.images = element;
    if (ingredient.imageId == this.images.id) {
      ingredient.image64 = this.images.image64;
    }
  });
}


removeIngredient(id:number){
  this.ingredientService.deleteIngredient(id).subscribe(res => {
    this.ingredients = this.ingredients.filter((item: { id: number; }) => item.id !== id);
    console.log('Ingredient deleted successfully!');

})
}
}
