import { Dispatch } from "react"

export interface Cart {
    number: number,
    path: string,
}


export interface cartContext {
    cart : Cart[] | undefined
    setCart: Dispatch<React.SetStateAction<Cart[] | undefined>> | undefined
}