import { Navigate } from 'react-router';
import Register from './Register';

const Logout = () => {
  localStorage.clear();
  return <Navigate to="/" />;
};

const RegisterAndLogout = () => {
  localStorage.clear();
  return <Register />;
};

export { Logout, RegisterAndLogout };
