import {useCartContext} from '../../Context';
import CartCard from './CartCard';
import './Cart.css'
import { productsList } from '../../Products/ProductLists';

const Cart = () => {
    const cartContext = useCartContext();

    const displayCart = () => {
      if(cartContext.cart.length !== 0){

        const cartList = cartContext.cart.map((cart) => ({
          ...productsList[productsList.map(item => item.path).indexOf(cart.path)],
          amount: cart.number
        }))
    
        const subtotal = cartList.map(item => item.price * item.amount).reduce((sum, price) => sum + price)

        return (
          <>
          <div>

          <h1 id='cart-title'> Shopping Cart</h1>
            <div id='cart-labels'>
              <p>Item</p>
              <p>Price</p>
              <p>Quantity</p>
              <p>Total</p>
            </div>
            
            {cartList.map((item) => 
              (
                <CartCard item={item} key={'cart' + item.path}/>
              )
            )}

            
            <ul id='cart-totals'>
              <li> 
                <p>Subtotal:</p> 
                <p>${subtotal}</p>
              </li>
              <li>
                <p>Sales Tax:</p> 
                <p>${(subtotal * .0725).toFixed(2)}</p>
              </li>
              <li>
                <p>Delivery:</p> 
                <p>$5</p>
              </li>
              <li>
                <p>Grand Total:</p> 
                <p>${(subtotal * 1.0725 + 5).toFixed(2)}</p>
              </li>
            </ul>
            
          </div>

          
          </>
          
        )
      }else{
        return (
          <>
            <h1 className='empty-list'>There is nothing in your cart.</h1>
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
