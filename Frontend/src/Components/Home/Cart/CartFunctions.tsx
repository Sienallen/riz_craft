import { PrivateAxiosInstance } from '../../../api';
import { Cart, Product } from '../../Interface';

//updates the local storage when the user is not logged in
export const UpdateLocalCart = (
  itemData: Product,
  quantity: number = 1,
  getCart: () => void = () => {}
) => {
  let localCart: Cart[] = [];

  const jsonCart = localStorage.getItem('localCart');
  if (jsonCart !== null) {
    localCart = JSON.parse(jsonCart);
  }

  const itemIndex = localCart.findIndex(
    (item) => item.product.path === itemData.path
  );

  //if item quantity is at 1 and user wants to decrease it remove it.
  if (itemIndex !== -1 && localCart[itemIndex].quantity + quantity === 0) {
    localCart.splice(itemIndex, 1);
  }
  //item quantity incrases or decrases by 1
  else if (itemIndex !== -1) {
    console.log('increasing or decreasing item');
    localCart[itemIndex].quantity += quantity;
  }
  //when item is not in cart, add the item to the localCart
  else {
    console.log('json cart is null ');
    localCart.push({ product: itemData, quantity: 1, id: `${itemData.name}` });
  }

  //set the key 'localCart' have value of localCart (array of Products)
  localStorage.setItem('localCart', JSON.stringify(localCart));
  getCart();
};

//updates the cart that connects with the user if the user is logged in
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
  }
  //increase or decrease the item by 1 or -1
  else if (item) {
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
