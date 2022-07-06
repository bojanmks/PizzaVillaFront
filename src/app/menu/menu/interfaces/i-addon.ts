import { IBaseAdminInterface } from "src/app/shared/interfaces/i-base-admin-interface";

export interface IAddon {
    name: string;
    price: number;
}

export interface IAddonGet extends IAddon {
    id: number;
}

export interface IAddonGetAdmin extends IAddonGet, IBaseAdminInterface {
    isActive: boolean;
}

export interface IAddonCreate extends IAddon {
    isActive: boolean;
}

export interface IAddonUpdate extends IAddon {
    id: number;
    isActive: boolean;
}