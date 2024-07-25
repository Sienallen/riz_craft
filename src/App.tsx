import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { Outlet } from 'react-router';
import { useState } from 'react';
import { Cart } from './Components/Interface';
import { CartContext } from './Components/Context';

function App() {

  const [cart, setCart] = useState<Cart[]>([
  /* {
    number: 2,
    path: 'floweredBag',
  } */
]);

  const [fav, setFav] = useState([])

  return (
    <>
      <Header />
      <body>
      <CartContext.Provider value = {{cart, setCart}}>
        <Outlet />
      </CartContext.Provider>
      </body>
      
     
      <Footer />
    </>
  );
}

export default App;
