import { IUser } from "src/app/admin/admin-users/admin-users/interfaces/i-user";

export interface IOrder {

}

export interface IOrderGet {
    user: IUser;
    totalPrice: number;
    createdAt: Date;
    deliveredAt: Date;
}

export interface ICreateOrder extends IOrder {
    deliveryAddress: string;
}