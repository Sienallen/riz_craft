import './Cart.css';
import UserCart from './UserCart';
import isAuthenticated from '../../Accounts/isAuthenticated';
import { useEffect, useState } from 'react';
import LocalCart from './LocalCart';

const Cart = () => {
  const [isAuth, setIsAuth] = useState<boolean | null>(null);

  useEffect(() => {
    const checkAuth = async () => {
      const result = await isAuthenticated();
      setIsAuth(result);
    };
    checkAuth();
  }, []);

  return isAuth ? <UserCart /> : <LocalCart />;
};

export default Cart;
