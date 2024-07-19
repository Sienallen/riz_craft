import {useContext } from 'react';
import {CartContext} from '../../Context';
import CartCard from './CartCard';

const Cart = () => {
    const cartContext = useContext(CartContext);

    const displayCart = () => {
      if(cartContext && cartContext.cart !== undefined){
        let basket = cartContext.cart;
        return (
          <>
          {basket.map((item) => 
            (
              <CartCard path={item.path} amount={item.number} key={'cart' + item.path}/>
            )
          )}
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
