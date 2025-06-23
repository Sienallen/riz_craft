import { Navigate } from 'react-router';
import { jwtDecode } from 'jwt-decode';
import AxiosInstance from '../../api';
import { REFRESH_TOKEN, ACCESS_TOKEN } from '../../constants';
import { useState, useEffect } from 'react';

type Props = {
  children: string | JSX.Element | JSX.Element[];
};

const ProtectedRoute = ({ children }: Props) => {
  const [isAuth, setIsAuth] = useState<boolean | null>(null);

  useEffect(() => {
    auth().catch(() => setIsAuth(false));
  }, []);

  const refreshToken = async () => {
    const refreshToken = localStorage.getItem(REFRESH_TOKEN);
    try {
      const res = await AxiosInstance.post('/api/token/refresh/', {
        refresh: refreshToken,
      });
      if (res.status === 200) {
        localStorage.setItem(ACCESS_TOKEN, res.data.access);
        setIsAuth(true);
      } else {
        setIsAuth(false);
      }
    } catch (error) {
      console.log(error);
      setIsAuth(false);
    }
  };

  const auth = async () => {
    const token = localStorage.getItem(ACCESS_TOKEN);
    if (!token) {
      setIsAuth(false);
      return;
    }
    const decoded = jwtDecode(token);
    const tokenExpiration = decoded.exp;
    const now = Date.now() / 1000;

    if (tokenExpiration === undefined) {
      throw new Error('tokenExpiration is undefined');
    }

    if (tokenExpiration < now) {
      await refreshToken();
    } else {
      setIsAuth(true);
    }
  };

  if (isAuth === null) {
    return <div>Loading...</div>;
  }

  return isAuth ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
