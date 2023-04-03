import { IContact } from "./contacts.interfaces";

export interface IUser {
    id: string;
    name: string;
    email: string;
    password: string;
    phone: string;
    createdAt: string;
    contacts?: IContact[]
}

export interface INewUserRequest {
    name: string;
    email: string;
    password: string;
    phone: string;
}

export interface IUserResponse {
    id: string;
    name: string;
    email: string;
    phone: number;
    createdAt: Date;
    contacts?: IContact[]
}

export interface ILoginRequest {
    email: string;
    password: string;
}
