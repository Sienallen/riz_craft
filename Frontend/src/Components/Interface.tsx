import { Dispatch } from 'react';

export interface Cart {
  number: number;
  path: string;
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

export interface favContext {
  fav: Product[];
  setFav: Dispatch<React.SetStateAction<Product[]>>;
}

export interface Fav {
  product: Product;
  id: string;
}
