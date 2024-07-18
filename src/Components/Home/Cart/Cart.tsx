import {useContext } from 'react';
import {CartContext} from '../../Context';

const Cart = () => {
    const cartContext = useContext(CartContext);

    const displayCart = () => {
      if(cartContext && cartContext.cart !== undefined){
        let basket = cartContext.cart;
        return (
          <>
          {basket.map((item) => 
            (
              <div>
                {item.number}
              </div>
      
            ))}
          </>
          
        )
      }else{
        return (
          <>
          <h1>There is nothing in your cart.</h1>
          </>
        )
        
      }
    }

  return (
  <>
    <div>
      {displayCart()}
    </div>
  </>);
};

export default Cart;
