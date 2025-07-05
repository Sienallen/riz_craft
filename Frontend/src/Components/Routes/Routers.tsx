import { createHashRouter } from 'react-router-dom';
import type { RouteObject } from 'react-router-dom';
import App from '../../App';
import ShopPage from '../ShopPage';
import Home from '../Home/Home';
import About from '../About/About';
import Contacts from '../Contacts/Contacts';
import ProductPage from '../Products/Product';
import Cart from '../Home/Cart/Cart';
import { Fav } from '../Home/Fav/Fav';
import Login from '../Accounts/Login';
import { Logout, RegisterAndLogout } from '../Accounts/Logout';
import ProtectedRoute from '../Accounts/ProtectedRoute';
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
        element: (
          <ProtectedRoute>
            <Fav />
          </ProtectedRoute>
        ),
      },

      {
        path: 'shopPage/:path',
        element: <ProductPage />,
        errorElement: <div>Product does not exist.</div>,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'register',
        element: <RegisterAndLogout />,
      },
      {
        path: 'logout',
        element: <Logout />,
      },
    ],
  },
];

const Routers = createHashRouter(routes);

export default Routers;
