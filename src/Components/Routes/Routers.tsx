import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../../App';
import ShopPage from '../ShopPage';
import Home from '../Home/Home';
import About from '../About/About';
import Contacts from '../Contacts/Contacts';
import Product from '../Products/Product';

const Routers = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
        errorElement: <div>404 Not Found</div>,
      },

      {
        path: 'shopPage',
        element: <ShopPage />,
      },
      {
        path: 'aboutPage',
        element: <About />,
      },
      {
        path: 'contactsPage',
        element: <Contacts />,
      },
      {
        path: 'shopPage/:path',
        element: <Product />,
        errorElement: <div>Product does not exist.</div>,
      },
    ],
  },
]);

export default Routers;
