import { IIngredient } from "./i-ingredient";
import { IProductCategory } from "./i-product-category";

export interface IProduct {
    name: string;
    image: string;
    price: number;
}

export interface IProductGet extends IProduct {
    id: number;
    category: IProductCategory;
    ingredients: IIngredient[];
}

export interface IProductCreate extends IProduct {
    categoryId: number;
    ingredientIds: number[];
}

export interface IProductUpdate extends IProduct {
    id: number;
    categoryId: number;
    ingredientIds: number[];
}