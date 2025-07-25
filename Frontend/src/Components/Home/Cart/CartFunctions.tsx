import { PrivateAxiosInstance } from '../../../api';
import { Cart, Product } from '../../Interface';

//Used my Favcard and cart card to update the cart.

export const UpdateLocalCart = (itemData: Product, quantity: number = 1) => {
  let localCart: Cart | null;

  const jsonCart = localStorage.getItem('localCart');
  if (jsonCart === null) {
    let item: Cart[] = [{ product: itemData, quantity: 1, id: '1' }];
    localStorage.setItem('localCart', JSON.stringify(item));
  } else {
    localCart = JSON.parse(jsonCart);
  }
};

export const UpdateUserCart = async (
  itemData: Product,
  quantity: number = 1,
  getCart: () => void = () => {}
) => {
  let item: Cart | null = null;
  try {
    const response = await PrivateAxiosInstance.get('/api/cart/');
    const cartItems = response.data;

    // Save filtered item to your `let` variable
    item = cartItems.find((item: Cart) => item.product.path === itemData.path);

    console.log('Saved to userCart:', item);
  } catch (error) {
    console.error('Error fetching cart:', error);
  }

  //updates item to cart if item is already in cart
  if (item && item?.quantity + quantity === 0) {
    deleteCart(itemData, getCart);
  } else if (item) {
    await PrivateAxiosInstance.patch(`/api/cart/update/${item.id}/`, {
      quantity: item.quantity + quantity,
    }).then((res) => {
      if (res.status === 200) {
        alert('Updated cart!');
      } else alert('Failed to update cart');
    });
    console.log('update cart data');
  }
  //adds item to cart if item is not in cart
  else {
    console.log('add to cart');
    await PrivateAxiosInstance.post(`/api/cart/`, {
      product_id: itemData.id,
      quantity: 1,
    })
      .then((res) => {
        if (res.status === 201) {
          alert('Added to cart!');
        } else alert('Failed to add to cart');
      })
      .catch((error) => alert(error));
  }

  await getCart();
};

export const deleteCart = async (itemData: Product, getCart: () => void) => {
  let item: Cart | null = null;

  try {
    const response = await PrivateAxiosInstance.get('api/cart/');
    const cartItems = response.data;

    // Save filtered item to your `let` variable
    item = cartItems.find((item: Cart) => item.product.path === itemData.path);

    console.log('Saved to userCart:', item);
  } catch (error) {
    console.error('Error fetching cart:', error);
  }
  if (item !== null) {
    await PrivateAxiosInstance.delete(`/api/cart/delete/${item.id}/`)
      .then((res) => {
        if (res.status === 204) alert('Removed from Cart!');
        else alert('Failed to remove product');
      })
      .catch((error) => alert(error));
  }
  await getCart();
};
