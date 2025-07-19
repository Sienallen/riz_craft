import { Product } from '../../Interface';
import './CartCart.css';
import { deleteCart } from './CartFunctions';

interface prop {
  product: Product;
  quantity: number;
  id: string;
  getCart: () => void;
}

const CartCard = ({ product, quantity, getCart }: prop) => {
  const addQty = () => {
    /*  const updatedCart = [...cartContext.cart];
    const index = updatedCart.map((item) => item.path).indexOf(item.path);
    updatedCart[index].number++;
    cartContext.setCart(updatedCart); */
    console.log('add quantity');
  };

  const minusQty = () => {
    /* const updatedCart = [...cartContext.cart];
    const index = updatedCart.map((item) => item.path).indexOf(item.path);
    if (updatedCart[index].number !== 1) {
      updatedCart[index].number--;
      cartContext.setCart(updatedCart);
    } else {
      updatedCart.splice(index, 1);
      cartContext.setCart(updatedCart);
    } */

    console.log('minus quantity');
  };

  return (
    <>
      <div id="cart-card">
        <section id="cart-head">
          <img
            src={product.img}
            alt="item image"
            height="80"
            width="80"
            className="cart-img"
          />

          <section id="cartCard-title">
            <h3>{product.name}</h3>
            <p>{product.description}</p>

            <p
              className="gold-button"
              id="remove-button"
              onClick={() => {
                deleteCart(product, getCart);
              }}
            >
              Remove
            </p>
          </section>
        </section>

        <section id="cart-numbers">
          <section id="cart-price">
            <p>{'$' + product.price}</p>
          </section>
          <section id="cart-qty">
            <p onClick={minusQty}>-</p>
            <p>{quantity}</p>
            <p onClick={addQty}>+</p>
          </section>
          <section id="cart-item-total">
            <p>{'$' + product.price * quantity}</p>
          </section>
        </section>
      </div>
    </>
  );
};

export default CartCard;
