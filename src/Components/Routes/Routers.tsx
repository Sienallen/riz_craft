import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../../App';
import ShopPage from '../ShopPage';
import Home from '../Home/Home';

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
    ],
  },
]);

export default Routers;
