import { Image } from './../models/image';
export class Ingredient {
  id?: number;
  status: boolean;
  label: string;
  description: string;
  imageId?: number;
  image64: string;
  filePath: string;
  image: Image | undefined;

  constructor(
    label: string = '',
    description: string = '',
    status: boolean = false,
    image64: string = '',
    filePath: string = '',

  ) {

    this.label = label;
    this.status = status;
    this.description = description;
    this.image64 = image64;
    this.filePath = filePath;
  }
}
