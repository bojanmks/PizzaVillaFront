import { IAddonGetOrdered } from "src/app/menu/menu/interfaces/i-addon";
import { IIngredientOrdered } from "src/app/menu/menu/interfaces/i-ingredient";
import { IProduct } from "src/app/menu/menu/interfaces/i-product";

export interface ICartItem {
    
}

export interface ICartItemGet extends ICartItem {
    id: number;
    totalPrice: number;
    ingredients?: IIngredientOrdered[],
    product?: IProduct,
    addons?: IAddonGetOrdered[],
    amount: number;
    productPriceWhenOrdered?: number;
}

export interface ICartItemCreate extends ICartItem {
    productId?: number;
    ingredientIds?: number[];
    addonIds?: number[];
}