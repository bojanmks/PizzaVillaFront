import { IBaseAdminInterface } from "src/app/shared/interfaces/i-base-admin-interface";
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

export interface IProductGetAdmin extends IProductGet, IBaseAdminInterface {
    
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