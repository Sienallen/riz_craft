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

  useEffect(() => {
    const checkAuth = async () => {
      const result = await isAuthenticated();
      setIsAuth(result);
    };
    checkAuth();
  }, [dropDown]);

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
