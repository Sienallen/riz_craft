import { useEffect, useState } from 'react';
import { Cart } from '../../Interface';
import CartCard from './CartCard';

const LocalCart = () => {
  const [localCartItem, setLocalCartItem] = useState<Cart[]>([]);

  useEffect(() => {
    const jsonCart = localStorage.getItem('localCart');
    if (jsonCart !== null) {
      //put this in a use effect to prevent a lot of rerendersç
      setLocalCartItem(JSON.parse(jsonCart));
    }
  }, []);

  // If the jsonCart is null meaning nothing in localstorage, it will display empty shopping cart
  if (localCartItem.length === 0) {
    return (
      <>
        <h1 id="cart-title"> Local Shopping Cart</h1>
        <h1 className="empty-list">There is nothing in your cart.</h1>
      </>
    );
  }

  //if the storedCartItem is not undefined it will display the cart
  else {
    const subtotal = localCartItem
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

          {localCartItem.map((item) => (
            <CartCard
              product={item.product}
              quantity={item.quantity}
              id={item.id}
              key={item.id}
              getCart={() => {}}
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

export default LocalCart;
