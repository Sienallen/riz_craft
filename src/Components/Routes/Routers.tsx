import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../../App';
import ShopPage from '../ShopPage';
import Home from '../Home/Home';
import About from '../About/About';
import Contacts from '../Contacts/Contacts';

const Routers = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
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
    ],
  },
]);

export default Routers;
