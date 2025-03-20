
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface CookieCreateInput {
    description: string;
    imageUrl: string;
    isShowcased: boolean;
    name: string;
    price: number;
    stock: number;
}

export interface CookieUpdateInput {
    description?: Nullable<string>;
    imageUrl?: Nullable<string>;
    isShowcased?: Nullable<boolean>;
    name?: Nullable<string>;
    price?: Nullable<number>;
    stock?: Nullable<number>;
}

export interface UserCreateInput {
    address?: Nullable<string>;
    age: number;
    country: string;
    email: string;
    firstName: string;
    lastName: string;
    password: string;
    zipCode?: Nullable<string>;
}

export interface UserUpdateInput {
    address?: Nullable<string>;
    age?: Nullable<number>;
    country?: Nullable<string>;
    email?: Nullable<string>;
    firstName?: Nullable<string>;
    lastName?: Nullable<string>;
    password?: Nullable<string>;
    zipCode?: Nullable<string>;
}

export interface Cookies {
    createdAt: DateTime;
    deletedAt?: Nullable<DateTime>;
    description: string;
    id: string;
    imageUrl: string;
    isShowcased: boolean;
    name: string;
    price: number;
    stock: number;
    updatedAt?: Nullable<DateTime>;
}

export interface IMutation {
    createCookies(input: CookieCreateInput): Cookies | Promise<Cookies>;
    createUsers(input: UserCreateInput): Users | Promise<Users>;
    removeCookies(id: string): boolean | Promise<boolean>;
    removeUsers(id: string): boolean | Promise<boolean>;
    updateCookies(id: string, input: CookieUpdateInput): Cookies | Promise<Cookies>;
    updateUsers(id: string, input: UserUpdateInput): Users | Promise<Users>;
}

export interface IQuery {
    findAllCookies(): Cookies[] | Promise<Cookies[]>;
    findAllUsers(): Users[] | Promise<Users[]>;
    findOneInCookies(id: string): Cookies | Promise<Cookies>;
    findOneInUsers(id: string): Users | Promise<Users>;
}

export interface Users {
    address?: Nullable<string>;
    age: number;
    country: string;
    createdAt: DateTime;
    deletedAt?: Nullable<DateTime>;
    email: string;
    firstName: string;
    id: string;
    lastName: string;
    updatedAt?: Nullable<DateTime>;
    zipCode?: Nullable<string>;
}

export type DateTime = any;
type Nullable<T> = T | null;
