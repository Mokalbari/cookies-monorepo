
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export enum OrderStatus {
    CANCELLED = "CANCELLED",
    COMPLETED = "COMPLETED",
    PENDING = "PENDING"
}

export enum UserRole {
    ADMIN = "ADMIN",
    BANNED = "BANNED",
    USER = "USER"
}

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

export interface OrderCreateInput {
    items: OrderItemCreateInput[];
    orderStatus: OrderStatus;
    total: number;
    userId: string;
}

export interface OrderItemCreateInput {
    cookieId: string;
    quantity: number;
}

export interface OrderItemUpdateInput {
    quantity: number;
}

export interface OrderUpdateInput {
    items: OrderItemCreateInput[];
    orderStatus: OrderStatus;
    total: number;
}

export interface UserCreateInput {
    address?: Nullable<string>;
    age: number;
    country: string;
    email: string;
    firstName: string;
    lastName: string;
    password: string;
    role: UserRole;
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
    role: UserRole;
    zipCode?: Nullable<string>;
}

export interface Cookies {
    createdAt: DateTime;
    deletedAt?: Nullable<DateTime>;
    description?: Nullable<string>;
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
    createOrderItems(input: OrderItemCreateInput): OrderItems | Promise<OrderItems>;
    createOrders(input: OrderCreateInput): Orders | Promise<Orders>;
    createUsers(input: UserCreateInput): Users | Promise<Users>;
    removeCookies(id: string): boolean | Promise<boolean>;
    removeOrderItems(id: string): boolean | Promise<boolean>;
    removeOrders(id: string): boolean | Promise<boolean>;
    removeUsers(id: string): boolean | Promise<boolean>;
    updateCookies(id: string, input: CookieUpdateInput): Cookies | Promise<Cookies>;
    updateOrderItems(id: string, input: OrderItemUpdateInput): OrderItems | Promise<OrderItems>;
    updateOrders(id: string, input: OrderUpdateInput): Orders | Promise<Orders>;
    updateUsers(id: string, input: UserUpdateInput): Users | Promise<Users>;
}

export interface OrderItems {
    cookie: Cookies;
    createdAt: DateTime;
    id: string;
    order: Orders;
    quantity: number;
}

export interface Orders {
    createdAt: DateTime;
    deletedAt?: Nullable<DateTime>;
    id: string;
    items: OrderItems[];
    orderStatus: OrderStatus;
    total: number;
    updatedAt?: Nullable<DateTime>;
    user: Users;
}

export interface IQuery {
    findAllCookies(): Cookies[] | Promise<Cookies[]>;
    findAllOrderItems(): OrderItems[] | Promise<OrderItems[]>;
    findAllOrders(): Orders[] | Promise<Orders[]>;
    findAllUsers(): Users[] | Promise<Users[]>;
    findOneInCookies(id: string): Cookies | Promise<Cookies>;
    findOneInOrderItems(id: string): OrderItems | Promise<OrderItems>;
    findOneInOrders(id: string): Orders | Promise<Orders>;
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
    role: UserRole;
    updatedAt?: Nullable<DateTime>;
    zipCode?: Nullable<string>;
}

export type DateTime = any;
type Nullable<T> = T | null;
