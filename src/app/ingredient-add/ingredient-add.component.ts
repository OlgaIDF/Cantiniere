import { Ingredient } from './../models/ingredient';
import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Image } from './../models/image';
import { IngredientService } from './../service/ingredient.service';

@Component({
  selector: 'app-ingredient-add',
  templateUrl: './ingredient-add.component.html',
  styleUrls: ['./ingredient-add.component.css']
})
export class IngredientAddComponent implements OnInit {
  @Input() ingredient: Ingredient = new Ingredient()
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
      //IngredientsAll
      this.ingredientService.getIngredients().subscribe((data) => {
        this.ingredients = data;
        console.log('Ingredients: ', this.ingredients);
      });

   }//ngOnInit()
   onSubmit(addIngredient: NgForm) {

    let filePathTemp = 'img' + '/pict_' + Math.floor(Math.random() * (800 + 1)) + '.png';
    console.log('filepathe temp', filePathTemp);

    this.img64 = new Image(filePathTemp, this.ingredient.image64);
    this.ingredient.image = this.img64;
    this.ingredient.filePath = filePathTemp;

    this.ingredient.image64 = this.img64.image64;
    this.ingredient.imageId = this.ingredients.length;

    this.ingredientService.addIngredient(this.ingredient).subscribe(data => {
      this.ingredient = data;
    });
    console.log('onSubmit this.ingredient', this.ingredient);

    this.router.navigateByUrl('ingredients-management');
    alert('Felicitation vous venez d\'ajouter '+ this.ingredient.label + ' à vos ingredients')

  }//onSubmit()

}
