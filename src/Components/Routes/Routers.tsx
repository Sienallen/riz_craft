import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../../App';
import ShopPage from '../ShopPage';

const Routers = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'shopPage',
        element: <ShopPage />,
      },
    ],
  },
]);

export default Routers;
