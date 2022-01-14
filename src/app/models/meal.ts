
export class Meal {
    id: number;
    label: string;
    status: boolean;
    imageId: number;
    priceDF: number;
    availableForWeeks: string;
    category: number;

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