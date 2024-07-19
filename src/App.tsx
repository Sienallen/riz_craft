import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { Outlet } from 'react-router';
import { useState } from 'react';
import { Cart } from './Components/Interface';
import { CartContext } from './Components/Context';

function App() {

  const [cart, setCart] = useState<Cart[] | undefined>([{
    number: 1,
    path: 'tulipBouquet'
  },
  {
    number: 2,
    path: 'floweredBag',
  }
]);

  return (
    <>
      <Header />
      <CartContext.Provider value = {{cart, setCart}}>
        <Outlet />
      </CartContext.Provider>
     
      <Footer />
    </>
  );
}

export default App;
