
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
    removeCookies(id: string): boolean | Promise<boolean>;
    updateCookies(id: string, input: CookieUpdateInput): Cookies | Promise<Cookies>;
}

export interface IQuery {
    findAllCookies(): Cookies[] | Promise<Cookies[]>;
    findOneCookies(id: string): Cookies | Promise<Cookies>;
}

export type DateTime = any;
type Nullable<T> = T | null;
