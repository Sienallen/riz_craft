import { Dispatch } from "react"

export interface Cart {
    number: number,
    path: string,
}

export interface cartContext {
    cart : Cart[]
    setCart: Dispatch<React.SetStateAction<Cart[]>>
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

export interface fav{
    name: string;
    img: string;
    price: number;
    rating: number;
    description: string;
    path: string;
}

export interface favContext {
    fav: fav[];
    setFav: Dispatch<React.SetStateAction<fav[]>>
}