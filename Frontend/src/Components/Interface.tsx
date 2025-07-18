import { Dispatch } from 'react';

export interface Cart {
  product: Product;
  quantity: number;
  id: string;
}

export interface cartContext {
  cart: Cart[];
  setCart: Dispatch<React.SetStateAction<Cart[]>>;
}

export interface cartList {
  amount: number;
  name: string;
  img: string;
  price: number;
  rating: number;
  description: string;
  path: string;
}

export interface Product {
  name: string;
  img: string;
  price: number;
  rating: number;
  description: string;
  path: string;
  id: string;
}

export interface Fav {
  product: Product;
  id: string;
}
