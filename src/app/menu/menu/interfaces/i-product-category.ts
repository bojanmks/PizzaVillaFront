import { IBaseAdminInterface } from "src/app/shared/interfaces/i-base-admin-interface";

export interface IProductCategory {
    name: string;
}

export interface IProductCategoryGet extends IProductCategory {
    id: number;
}

export interface IProductCategoryGetAdmin extends IProductCategoryGet, IBaseAdminInterface {

}

export interface IProductCategoryCreate extends IProductCategory {

}

export interface IProductCategoryUpdate extends IProductCategory {
    id: number;
}