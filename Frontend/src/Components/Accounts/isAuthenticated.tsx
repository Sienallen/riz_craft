import { jwtDecode } from 'jwt-decode';
import AxiosInstance from '../../api';
import { REFRESH_TOKEN, ACCESS_TOKEN } from '../../constants';

const isAuthenticated = async (): Promise<boolean | null> => {
  const accessToken = localStorage.getItem(ACCESS_TOKEN);
  let isAuth: boolean | null = null;
  if (!accessToken) return false;

  const decoded = jwtDecode(accessToken);
  const tokenExpiration = decoded.exp;
  const now = Date.now() / 1000;

  if (tokenExpiration === undefined) {
    throw new Error('tokenExpiration is undefined');
  }

  if (tokenExpiration < now) {
    isAuth = await refreshToken();
  } else {
    isAuth = true;
  }

  return isAuth;
};

const refreshToken = async () => {
  const refreshToken = localStorage.getItem(REFRESH_TOKEN);

  try {
    const res = await AxiosInstance.post('/api/token/refresh/', {
      refresh: refreshToken,
    });
    if (res.status === 200) {
      localStorage.setItem(ACCESS_TOKEN, res.data.access);
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
    return false;
  }
};

export default isAuthenticated;
