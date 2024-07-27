import { CartContext, useCartContext } from '../../Context';
import { cartList } from '../../Interface';
import { productsList } from '../../Products/ProductLists';
import './CartCart.css';

interface props {
  item: cartList;
}

const CartCard = ({ item }: props) => {
  const cartContext = useCartContext();

  const addQty = () => {
    const updatedCart = [...cartContext.cart];
    const index = updatedCart.map((item) => item.path).indexOf(item.path);
    updatedCart[index].number++;
    cartContext.setCart(updatedCart);
  };

  const minusQty = () => {
    const updatedCart = [...cartContext.cart];
    const index = updatedCart.map((item) => item.path).indexOf(item.path);
    if (updatedCart[index].number !== 1) {
      updatedCart[index].number--;
      cartContext.setCart(updatedCart);
    } else {
      updatedCart.splice(index, 1);
      cartContext.setCart(updatedCart);
    }
  };

  const removeItem = () => {
    const updatedCart = [...cartContext.cart];
    const index = updatedCart.map((item) => item.path).indexOf(item.path);
    updatedCart.splice(index, 1);
    cartContext.setCart(updatedCart);
  };

  return (
    <>
      <div id="cart-card">
        <section id="cart-head">
          <img
            src={item.img}
            alt="item image"
            height="80"
            width="80"
            className="cart-img"
          />

          <section id="cartCard-title">
            <h3>{item.name}</h3>
            <p>{item.description}</p>

            <p className="gold-button" id="remove-button" onClick={removeItem}>
              Remove
            </p>
          </section>
        </section>

        <section id="cart-numbers">
          <section id="cart-price">
            <p>{'$' + item.price}</p>
          </section>
          <section id="cart-qty">
            <p onClick={minusQty}>-</p>
            <p>{item.amount}</p>
            <p onClick={addQty}>+</p>
          </section>
          <section id="cart-item-total">
            <p>{'$' + item.price * item.amount}</p>
          </section>
        </section>
      </div>
    </>
  );
};

export default CartCard;
