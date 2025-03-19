
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
    id: string;
    imageUrl?: Nullable<string>;
    isShowcased: boolean;
    name: string;
    orderItems?: Nullable<OrderItem[]>;
    price: number;
    updatedAt?: Nullable<DateTime>;
}

export interface OrderItem {
    cookie: Cookies;
    createdAt: DateTime;
    id: string;
    order: Orders;
    price: number;
    quantity: number;
    updatedAt?: Nullable<DateTime>;
}

export interface Orders {
    createdAt: DateTime;
    id: string;
    orderItems?: Nullable<OrderItem[]>;
    status: string;
    totalPrice: number;
    updatedAt: DateTime;
    user: Users;
}

export interface IQuery {
    cookie(id: string): Nullable<Cookies> | Promise<Nullable<Cookies>>;
    cookies(): Cookies[] | Promise<Cookies[]>;
    showcasedCookies(): Cookies[] | Promise<Cookies[]>;
    user(id: string): Nullable<Users> | Promise<Nullable<Users>>;
    users(): Users[] | Promise<Users[]>;
}

export interface Users {
    address?: Nullable<string>;
    age: number;
    country?: Nullable<string>;
    createdAt: DateTime;
    email: string;
    firstName: string;
    id: string;
    lastName: string;
    orders?: Nullable<Orders[]>;
    updatedAt?: Nullable<DateTime>;
    zipCode?: Nullable<string>;
}

export type DateTime = any;
type Nullable<T> = T | null;
