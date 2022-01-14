export class Ingredient {
    id: number;
    status: boolean;
    label: string;
    imageId:  number;
    constructor(
        id: number,
        status: boolean,
        label: string,
        imageId: number
    ) {
        this.id = id;
        this.status = status;
        this.label = label;
        this.imageId = imageId;
    }
}
