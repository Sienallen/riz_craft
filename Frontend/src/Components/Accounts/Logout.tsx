import { Navigate } from 'react-router';

const Logout = () => {
  localStorage.clear();
  return <Navigate to="/" />;
};

export default Logout;
