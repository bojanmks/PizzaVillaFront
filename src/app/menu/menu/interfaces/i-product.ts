import { IIngredient } from "./i-ingredient";

export interface IProduct {
    id: number;
    name: string;
    image: string;
    category_id: number;
    ingredients_ids: number[];
    price: number;
}

export interface IProductDetailed extends IProduct {
    ingredients: IIngredient[]
    category?: string;
}