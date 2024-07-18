import { createContext, useContext } from "react";
import { cartContext } from "./Interface";


export const CartContext = createContext<cartContext | undefined>(undefined);

export function useCartContext() {
    const cart = useContext(CartContext);
  
    if (cart === undefined) {
      throw new Error('useCartContext must be used with a CartContext');
    }
  
    return cart;
  }
