
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface IQuery {
    user(id: number): Nullable<User> | Promise<Nullable<User>>;
    users(): User[] | Promise<User[]>;
}

export interface User {
    createdAt: DateTime;
    email: string;
    firstName: string;
    id: number;
    lastName: string;
    updatedAt?: Nullable<DateTime>;
}

export type DateTime = any;
type Nullable<T> = T | null;
