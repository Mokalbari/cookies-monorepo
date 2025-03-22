import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
};

export type CookieCreateInput = {
  description: Scalars['String']['input'];
  imageUrl: Scalars['String']['input'];
  isShowcased: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
  price: Scalars['Float']['input'];
  stock: Scalars['Int']['input'];
};

export type CookieUpdateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  imageUrl?: InputMaybe<Scalars['String']['input']>;
  isShowcased?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  stock?: InputMaybe<Scalars['Int']['input']>;
};

export type Cookies = {
  __typename?: 'Cookies';
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  imageUrl: Scalars['String']['output'];
  isShowcased: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  price: Scalars['Float']['output'];
  stock: Scalars['Int']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createCookies: Cookies;
  createOrderItems: OrderItems;
  createOrders: Orders;
  createUsers: Users;
  removeCookies: Scalars['Boolean']['output'];
  removeOrderItems: Scalars['Boolean']['output'];
  removeOrders: Scalars['Boolean']['output'];
  removeUsers: Scalars['Boolean']['output'];
  updateCookies: Cookies;
  updateOrderItems: OrderItems;
  updateOrders: Orders;
  updateUsers: Users;
};


export type MutationCreateCookiesArgs = {
  input: CookieCreateInput;
};


export type MutationCreateOrderItemsArgs = {
  input: OrderItemCreateInput;
};


export type MutationCreateOrdersArgs = {
  input: OrderCreateInput;
};


export type MutationCreateUsersArgs = {
  input: UserCreateInput;
};


export type MutationRemoveCookiesArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRemoveOrderItemsArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRemoveOrdersArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRemoveUsersArgs = {
  id: Scalars['ID']['input'];
};


export type MutationUpdateCookiesArgs = {
  id: Scalars['ID']['input'];
  input: CookieUpdateInput;
};


export type MutationUpdateOrderItemsArgs = {
  id: Scalars['ID']['input'];
  input: OrderItemUpdateInput;
};


export type MutationUpdateOrdersArgs = {
  id: Scalars['ID']['input'];
  input: OrderUpdateInput;
};


export type MutationUpdateUsersArgs = {
  id: Scalars['ID']['input'];
  input: UserUpdateInput;
};

export type OrderCreateInput = {
  items?: Array<OrderItemCreateInput>;
  orderStatus?: OrderStatus;
  total: Scalars['Float']['input'];
  userId: Scalars['String']['input'];
};

export type OrderItemCreateInput = {
  cookieId: Scalars['String']['input'];
  quantity: Scalars['Float']['input'];
};

export type OrderItemUpdateInput = {
  quantity: Scalars['Float']['input'];
};

export type OrderItems = {
  __typename?: 'OrderItems';
  cookie: Cookies;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  order: Orders;
  quantity: Scalars['Float']['output'];
};

export enum OrderStatus {
  Cancelled = 'CANCELLED',
  Completed = 'COMPLETED',
  Pending = 'PENDING'
}

export type OrderUpdateInput = {
  items: Array<OrderItemCreateInput>;
  orderStatus?: OrderStatus;
  total: Scalars['Float']['input'];
};

export type Orders = {
  __typename?: 'Orders';
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  items: Array<OrderItems>;
  orderStatus: OrderStatus;
  total: Scalars['Float']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  user: Users;
};

export type Query = {
  __typename?: 'Query';
  findAllCookies: Array<Cookies>;
  findAllOrderItems: Array<OrderItems>;
  findAllOrders: Array<Orders>;
  findAllUsers: Array<Users>;
  findOneInCookies: Cookies;
  findOneInOrderItems: OrderItems;
  findOneInOrders: Orders;
  findOneInUsers: Users;
};


export type QueryFindAllCookiesArgs = {
  skip: Scalars['Float']['input'];
  take: Scalars['Float']['input'];
};


export type QueryFindAllOrderItemsArgs = {
  skip: Scalars['Float']['input'];
  take: Scalars['Float']['input'];
};


export type QueryFindAllOrdersArgs = {
  skip: Scalars['Float']['input'];
  take: Scalars['Float']['input'];
};


export type QueryFindAllUsersArgs = {
  skip: Scalars['Float']['input'];
  take: Scalars['Float']['input'];
};


export type QueryFindOneInCookiesArgs = {
  id: Scalars['ID']['input'];
};


export type QueryFindOneInOrderItemsArgs = {
  id: Scalars['ID']['input'];
};


export type QueryFindOneInOrdersArgs = {
  id: Scalars['ID']['input'];
};


export type QueryFindOneInUsersArgs = {
  id: Scalars['ID']['input'];
};

export type UserCreateInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  age: Scalars['Int']['input'];
  country: Scalars['String']['input'];
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  password: Scalars['String']['input'];
  role?: UserRole;
  zipCode?: InputMaybe<Scalars['String']['input']>;
};

export enum UserRole {
  Admin = 'ADMIN',
  Banned = 'BANNED',
  User = 'USER'
}

export type UserUpdateInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  age?: InputMaybe<Scalars['Int']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  role?: UserRole;
  zipCode?: InputMaybe<Scalars['String']['input']>;
};

export type Users = {
  __typename?: 'Users';
  address?: Maybe<Scalars['String']['output']>;
  age: Scalars['Int']['output'];
  country: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  role: UserRole;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  zipCode?: Maybe<Scalars['String']['output']>;
};

export type MyCookiesQueryVariables = Exact<{ [key: string]: never; }>;


export type MyCookiesQuery = { __typename?: 'Query', findAllCookies: Array<{ __typename?: 'Cookies', name: string }> };


export const MyCookiesDocument = gql`
    query myCookies {
  findAllCookies(skip: 0, take: 10) {
    name
  }
}
    `;

/**
 * __useMyCookiesQuery__
 *
 * To run a query within a React component, call `useMyCookiesQuery` and pass it any options that fit your needs.
 * When your component renders, `useMyCookiesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMyCookiesQuery({
 *   variables: {
 *   },
 * });
 */
export function useMyCookiesQuery(baseOptions?: Apollo.QueryHookOptions<MyCookiesQuery, MyCookiesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MyCookiesQuery, MyCookiesQueryVariables>(MyCookiesDocument, options);
      }
export function useMyCookiesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MyCookiesQuery, MyCookiesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MyCookiesQuery, MyCookiesQueryVariables>(MyCookiesDocument, options);
        }
export function useMyCookiesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<MyCookiesQuery, MyCookiesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<MyCookiesQuery, MyCookiesQueryVariables>(MyCookiesDocument, options);
        }
export type MyCookiesQueryHookResult = ReturnType<typeof useMyCookiesQuery>;
export type MyCookiesLazyQueryHookResult = ReturnType<typeof useMyCookiesLazyQuery>;
export type MyCookiesSuspenseQueryHookResult = ReturnType<typeof useMyCookiesSuspenseQuery>;
export type MyCookiesQueryResult = Apollo.QueryResult<MyCookiesQuery, MyCookiesQueryVariables>;