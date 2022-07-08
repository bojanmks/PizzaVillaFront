import { FormGroup } from "@angular/forms";
import { IBaseAdminInterface } from "src/app/shared/interfaces/i-base-admin-interface";
import { IIngredient, IIngredientGet } from "./i-ingredient";
import { IProductCategory, IProductCategoryGet } from "./i-product-category";

export interface IProduct {
    name: string;
    price: number;
}

export interface IProductGet extends IProduct {
    id: number;
    image: string;
    category: IProductCategoryGet;
    ingredients: IIngredientGet[];
}

export interface IProductGetAdmin extends IProductGet, IBaseAdminInterface {
    isActive: boolean;
}

export interface IProductCreate extends IProduct {
    categoryId: number;
    ingredientIds: number[];
    isActive: boolean;
    image: FormGroup;
}

export interface IProductUpdate extends IProduct {
    id: number;
    categoryId: number;
    ingredientIds: number[];
    isActive: boolean;
    image?: FormGroup;
}