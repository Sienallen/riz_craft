import { createContext, useContext } from "react";
import { cartContext, favContext } from "./Interface";


export const CartContext = createContext<cartContext | undefined>(undefined);

export function useCartContext() {
    const cart = useContext(CartContext);
  
    if (cart === undefined) {
      throw new Error('useCartContext must be used with a CartContext');
    }
  
    return cart;
  }

  export const FavContext = createContext<favContext | undefined>(undefined);

  export function useFavContext(){
    const fav = useContext(FavContext);

    if(fav === undefined){
      throw new Error('useFavContext must be used with FavContext');
    }
    return fav;
  }