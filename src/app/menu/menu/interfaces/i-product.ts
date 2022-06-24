import { IIngredient } from "./i-ingredient";
import { IProductCategory } from "./i-product-category";

export interface IProduct {
    id: number;
    name: string;
    image: string;
    category: IProductCategory;
    ingredients: IIngredient[];
    price: number;
}