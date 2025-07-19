import CartCard from './CartCard';
import './Cart.css';
import { Cart } from '../../Interface';
import { useEffect, useState } from 'react';
import { PrivateAxiosInstance } from '../../../api';

const UserCart = () => {
  const [userCartItem, setUserCartItem] = useState<Cart[]>([]);

  const getUserCart = () => {
    PrivateAxiosInstance.get<Cart[]>('/api/cart/')
      .then((res) => res.data)
      .then((data) => {
        setUserCartItem(data);
      })
      .catch((err) => alert(err));
  };

  useEffect(() => {
    getUserCart();
  }, []);

  if (userCartItem.length === 0) {
    return (
      <>
        <h1 id="cart-title"> Shopping Cart</h1>
        <h1 className="empty-list">There is nothing in your cart.</h1>
      </>
    );
  } else {
    const subtotal = userCartItem
      .map((item) => item.quantity * item.product.price)
      .reduce((sum, price) => sum + price);

    return (
      <>
        <div>
          <h1 id="cart-title"> Shopping Cart</h1>
          <div id="cart-labels">
            <p>Item</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
          </div>

          {userCartItem.map((item) => (
            <CartCard
              product={item.product}
              quantity={item.quantity}
              id={item.id}
              key={item.id}
              getCart={getUserCart}
            />
          ))}

          <ul id="cart-totals">
            <li>
              <p>Subtotal:</p>
              <p>${subtotal}</p>
            </li>
            <li>
              <p>Sales Tax:</p>
              <p>${(subtotal * 0.0725).toFixed(2)}</p>
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
    );
  }
};

export default UserCart;
