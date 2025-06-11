import { createHashRouter } from 'react-router-dom';
import type { RouteObject } from 'react-router-dom';
import App from '../../App';
import ShopPage from '../ShopPage';
import Home from '../Home/Home';
import About from '../About/About';
import Contacts from '../Contacts/Contacts';
import Product from '../Products/Product';
import Cart from '../Home/Cart/Cart';
import { Fav } from '../Home/Fav/Fav';
import Login from '../Accounts/Login';

const routes: RouteObject[] = [
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
        path: 'cartPage',
        element: <Cart />,
      },

      {
        path: 'favPage',
        element: <Fav />,
      },

      {
        path: 'shopPage/:path',
        element: <Product />,
        errorElement: <div>Product does not exist.</div>,
      },
      {
        path: 'Login',
        element: <Login />,
      },
    ],
  },
];

const Routers = createHashRouter(routes);

export default Routers;
