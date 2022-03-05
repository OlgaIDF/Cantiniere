import { IngredientService } from './../service/ingredient.service';
import { Component, Input, OnInit } from '@angular/core';
import { Image } from './../models/image';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ingredient-edit',
  templateUrl: './ingredient-edit.component.html',
  styleUrls: ['./ingredient-edit.component.css']
})
export class IngredientEditComponent implements OnInit {
  @Input()
  ingredient: any;
  ingredients: any;
  images: any;
  tempImg: any;
  img64: Image | undefined;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private ingredientService: IngredientService
  ) { }

  ngOnInit(): void {
    this.getIngredient();


  }//ngOnInit()
  async getIngredient() {
    let id = this.route.snapshot.params['id'];
    this.ingredient = this.ingredientService.getIngredientById(id).subscribe((data) => {
      this.ingredient = data;
      console.log('Ingredient : ', this.ingredient );

      this.ingredientService.findImgIngredient(id).subscribe((element) => {
        this.images = element;
        if (this.ingredient.imageId == this.images.id) {
          this.ingredient.image64 = this.images.image64;
        }
      });

      //Ingredients All
      this.ingredientService.getIngredients().subscribe((data) => {
        this.ingredients = data;
        console.log('ingredients: ', this.ingredients);
      });


    });
  }//getIngredient()
  onSubmit(ingredientEdit: NgForm) {
    this.ingredientService.updateIngredient(this.ingredient.id, this.ingredient).subscribe((data) => {
      this.ingredient = data;
    });

    let filePathAndName = 'img' + '/pict_' + Math.floor(Math.random() * (800 + 1)) + '.png';
    let temp = this.ingredient.image64;
    this.tempImg = new Image(filePathAndName, temp);
    console.log('Img ingredientclass', this.tempImg);
    this.ingredientService.updateImageIngredient(this.ingredient.id, this.tempImg).subscribe((data) => {
      this.ingredient.image = data;
    });

    console.log('onSubmit this.ingredient', this.ingredient);

   this.router.navigateByUrl('ingredients-management');
  }
}//onSubmit()
