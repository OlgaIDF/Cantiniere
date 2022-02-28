import { Ingredient } from './ingredient';
import { Image } from './../models/image';

export class Meal {
    id?: number;
    label: string;
    status: boolean;
    imageId?: number;
    priceDF: number;
    availableForWeeks: string;
    category: number;
    ingredients: Ingredient [];
    ingredientsId: any [];
    image64: string;
    filePath: string;
    image: Image | undefined;

    constructor(
       // id: number,
        label: string = '',
        description: string = '',
    status: boolean = false,
    image64: string = '',
    filePath: string = '',
    priceDF: number = 0,
    availableForWeeks: string = '',
    ingredientsId: [] = [],
    ingredients: [] = [],
        category: number =0
    ) {
      //  this.id = id;
        this.label = label;
        this.status = status;
        this.image64 = image64
        this.priceDF = priceDF;
        this.filePath = filePath
        this.availableForWeeks = availableForWeeks;
        this.category =category;
        this.ingredients=ingredients;
        this.ingredientsId=ingredients;

    }
}
