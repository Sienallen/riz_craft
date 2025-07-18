import { Product, Cart } from '../../Interface';

interface cart {
  product: Product;
  quantity: number;
  id: string;
}
const LocalCart = () => {
  const storedCart = localStorage.getItem('localCart');
  if (storedCart === null) {
    return (
      <>
        <h1 id="cart-title"> Local Shopping Cart</h1>
        <h1 className="empty-list">There is nothing in your cart.</h1>
      </>
    );
  }
  const localCart = JSON.parse(storedCart);
  console.log(localCart);
  return <></>;
};

export default LocalCart;
