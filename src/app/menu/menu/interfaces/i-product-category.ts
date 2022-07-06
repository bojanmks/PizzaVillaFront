import { IBaseAdminInterface } from "src/app/shared/interfaces/i-base-admin-interface";

export interface IProductCategory {
    name: string;
}

export interface IProductCategoryGet extends IProductCategory {
    id: number;
}

export interface IProductCategoryGetAdmin extends IProductCategoryGet, IBaseAdminInterface {
    isActive: boolean;
}

export interface IProductCategoryCreate extends IProductCategory {
    isActive: boolean;
}

export interface IProductCategoryUpdate extends IProductCategory {
    id: number;
    isActive: boolean;
}