import { Link } from 'react-router-dom';
import Forms from '../Forms/Forms';

const Login = () => {
  return (
    <>
      <Forms route="/api/token" method="login" />
      <Link to="/register">Register</Link>
    </>
  );
};

export default Login;
