import { IIngredient } from "src/app/menu/menu/interfaces/i-ingredient";
import { IProduct } from "src/app/menu/menu/interfaces/i-product";

export interface ICartItem {
    
}

export interface ICartItemGet extends ICartItem {
    id: number;
    totalPrice: number;
    priceWhenOrdered?: number;
    ingredients?: IIngredient[],
    product?: IProduct,
    amount: number;
}

export interface ICartItemCreate extends ICartItem {
    productId?: number;
    ingredientIds?: number[];
}