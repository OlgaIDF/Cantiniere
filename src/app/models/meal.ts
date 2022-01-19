import { Ingredient } from './ingredient';
import { Image } from './image';


export class Meal {
    id: number;
    label: string;
    status: boolean;
    imageId: number;
    priceDF: number;
    availableForWeeks: string;
    category: number;
    ingredient?: Ingredient [];
    image?: Image [];

    constructor(
        id: number,
        label: string,
        status: boolean,
        imageId: number,
        priceDF: number,
        availableForWeeks:string,
        category: number
    ) {
        this.id = id;
        this.label = label;
        this.status = status;
        this.imageId = imageId;
        this.priceDF = priceDF;
        this.availableForWeeks = availableForWeeks;
        this.category =category;
    }
}