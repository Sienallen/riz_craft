import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { Outlet } from 'react-router';
import { useState } from 'react';
import { Cart, Crafts } from './Components/Interface';
import { CartContext, FavContext } from './Components/Context';
import plaidBag from './assets/Red Bag.jpg';

function App() {
  const [cart, setCart] = useState<Cart[]>([
    /* {
    number: 2,
    path: 'floweredBag',
  } */
  ]);

  const [fav, setFav] = useState<Crafts[]>([
    {
      name: 'Plaid Bag',
      img: plaidBag,
      price: 33.99,
      rating: 4.5,
      description: 'A red and white plaid bag with 2 red bows.',
      path: 'plaidBag',
    },
  ]);

  return (
    <>
      <Header />
      <FavContext.Provider value={{ fav, setFav }}>
        <CartContext.Provider value={{ cart, setCart }}>
          <Outlet />
        </CartContext.Provider>
      </FavContext.Provider>
      <Footer />
    </>
  );
}

export default App;
