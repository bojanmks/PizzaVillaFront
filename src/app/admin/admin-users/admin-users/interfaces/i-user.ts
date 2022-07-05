export interface IUser {
    username: string;
    email: string;
    isActive: boolean;
    useCaseIds: number[];
}

export interface IUserGet extends IUser {
    id: number;
}

export interface IUserCreate extends IUser {
    password: string;
}

export interface IUserUpdate extends IUser {
    id: number;
    password: string;
}