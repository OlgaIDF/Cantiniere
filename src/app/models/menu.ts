import { Meal } from './meal';
import { Image } from './../models/image';

export class Menu {
  id?: number;
  label: string;
  status: boolean;
  priceDF: number;
  availableForWeeks: string;
  meals: Meal[];
  mealIds: any[];
  imageId?: number;
  image64: string;
  filePath: string;
  image: Image | undefined;

  constructor(
    //id: number,
    label: string = '',
    status: boolean = false,
    //  imageId: number = 0,
    image64: string = '',
    filePath: string = '',
    priceDF: number = 0,
    availableForWeeks: string = '',
    mealIds: [] = [],
    meals: [] = []
  ) {
    //this.id = id,
    (this.label = label),
      (this.status = status),
     // (this.imageId = imageId),
      (this.image64 = image64),
      (this.priceDF = priceDF),
       (this.filePath = filePath),
      (this.availableForWeeks = availableForWeeks),
      (this.meals = meals);
    (this.mealIds = mealIds);
  }
}

