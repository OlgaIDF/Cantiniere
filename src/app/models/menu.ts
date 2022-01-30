import { Meal } from './meal';

export class Menu {
  id: number;
  label: string;
  status: boolean;
  priceDF: number;
  availableForWeeks: string;
    meals?: Meal[];
  imageId: number;

  constructor(
    id: number,
    label: string,
    status: boolean,
    imageId: number,
    priceDF: number,
    availableForWeeks: string,

  ) {
    (this.id = id),
      (this.label = label),
      (this.status = status),
      (this.imageId = imageId),
      (this.priceDF = priceDF),
      (this.availableForWeeks = availableForWeeks)

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
