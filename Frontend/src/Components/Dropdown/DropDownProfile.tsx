import { Link } from 'react-router-dom';
import './DropDownProfile.css';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { ACCESS_TOKEN, REFRESH_TOKEN } from '../../constants';
import AxiosInstance from '../../api';
import { jwtDecode } from 'jwt-decode';
import isAuthenticated from '../Accounts/isAuthenticated';

interface prop {
  /*   route: string; */
  setDropDown: Dispatch<SetStateAction<boolean>>;
  dropDown: boolean;
}

const DropDownProfile = ({ setDropDown, dropDown }: prop) => {
  const [isAuth, setIsAuth] = useState<boolean | null>(null);

  /*  useEffect(() => {
    const checkAuth = async () => {
      const result = await isAuthenticated();
      setIsAuth(result);
    };
    checkAuth();
  }, [dropDown]); */

  useEffect(() => {
    auth().catch(() => setIsAuth(false));
  }, [dropDown]);

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

  const name = !isAuth ? 'Sign in' : 'Sign out';

  const signInOrOut = () => {
    if (isAuth === false) {
      return (
        <Link to="/login" onClick={() => setDropDown(false)}>
          {name}
        </Link>
      );
    } else {
      return (
        <Link to="/logout" onClick={() => setDropDown(false)}>
          {name}
        </Link>
      );
    }
  };

  return (
    <div id="drop-down-menu" className={dropDown ? 'fade-in' : 'fade-out'}>
      <p>Profile</p>
      <p>Settings</p>
      <p>{signInOrOut()}</p>
    </div>
  );
};

export default DropDownProfile;
