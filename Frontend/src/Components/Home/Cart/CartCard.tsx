import { Cart, Product } from '../../Interface';
import './CartCart.css';
import { deleteCart, UpdateUserCart } from './CartFunctions';

interface prop {
  product: Product;
  quantity: number;
  id: string;
  getCart: () => void;
  UpdateCart: (product: Product, quantity: number, getCart: () => void) => void;
}

const CartCard = ({ product, quantity, getCart, UpdateCart }: prop) => {
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
            <p onClick={() => UpdateCart(product, -1, getCart)}>-</p>
            <p>{quantity}</p>
            <p onClick={() => UpdateCart(product, 1, getCart)}>+</p>
          </section>
          <section id="cart-item-total">
            <p>{'$' + (product.price * quantity).toFixed(2)}</p>
          </section>
        </section>
      </div>
    </>
  );
};

export default CartCard;
