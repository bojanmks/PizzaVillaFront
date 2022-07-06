import { IBaseAdminInterface } from "src/app/shared/interfaces/i-base-admin-interface";

export interface IIngredient {
    name: string;
    price: number;
}

export interface IIngredientGet extends IIngredient {
    id: number;
}

export interface IIngredientGetAdmin extends IIngredientGet, IBaseAdminInterface {
    isActive: boolean;
}

export interface IIngredientCreate extends IIngredient {
    isActive: boolean;
}

export interface IIngredientUpdate extends IIngredient {
    id: number;
    isActive: boolean;
}