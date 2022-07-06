import { IUser } from "src/app/admin/admin-users/admin-users/interfaces/i-user";
import { ICartItemGet } from "./i-cart-item";

export interface IOrder {

}

export interface IOrderGet {
    id: number;
    user: IUser;
    totalPrice: number;
    createdAt: Date;
    deliveredAt: Date;
    deliveryAddress: string;
    items: ICartItemGet[];
}

export interface ICreateOrder extends IOrder {
    deliveryAddress: string;
}