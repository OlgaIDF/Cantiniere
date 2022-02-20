import { Meal } from './meal';

export class Menu {
  id?: number;
  label: string;
  status: boolean;
  priceDF: number;
  availableForWeeks: string;
  meals: Meal[];
  imageId: number;
 // image64?: string;

  constructor(
    //id: number,
    label: string = '',
    status: boolean = false,
    imageId: number = 0,
 //   image64: string = '',
    priceDF: number = 0,
    availableForWeeks: string = '',
    meals: [] = []
  ) {
    //this.id = id,
    (this.label = label),
      (this.status = status),
      (this.imageId = imageId),
   //   (this.image64 = image64),
      (this.priceDF = priceDF),
      (this.availableForWeeks = availableForWeeks),
      (this.meals = meals);
  }
}

export class Image {
  id: number;
  imagePath: string;
  image64: string;

  constructor(id: number, imagePath: string, image64: string) {
    this.id = id;
    this.imagePath = imagePath;
    this.image64 = image64;
  }
}
