
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface Cookies {
    createdAt: DateTime;
    description: string;
    id: number;
    imageUrl?: Nullable<string>;
    isShowcased?: Nullable<boolean>;
    name: string;
    price: number;
    updatedAt?: Nullable<DateTime>;
}

export interface IQuery {
    cookie(id: number): Nullable<Cookies> | Promise<Nullable<Cookies>>;
    cookies(): Cookies[] | Promise<Cookies[]>;
    showcasedCookies(): Cookies[] | Promise<Cookies[]>;
    user(id: number): Nullable<Users> | Promise<Nullable<Users>>;
    users(): Users[] | Promise<Users[]>;
}

export interface Users {
    address?: Nullable<string>;
    age: number;
    country?: Nullable<string>;
    createdAt: DateTime;
    email: string;
    firstName: string;
    id: number;
    lastName: string;
    updatedAt?: Nullable<DateTime>;
    zipCode?: Nullable<string>;
}

export type DateTime = any;
type Nullable<T> = T | null;
