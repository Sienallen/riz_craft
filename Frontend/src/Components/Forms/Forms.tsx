import { useState } from 'react';
import { useNavigate } from 'react-router';
import { PrivateAxiosInstance } from '../../api';
import { ACCESS_TOKEN, REFRESH_TOKEN } from '../../constants';
import LoadingIndicator from './LoadingIndicator';
import './Forms.css';
import { Link } from 'react-router-dom';

interface props {
  route: string;
  method: string;
}
const Forms = ({ route, method }: props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const title = method === 'login' ? 'Login' : 'Register';

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();

    try {
      const res = await PrivateAxiosInstance.post(route, {
        username,
        password,
      });
      if (method === 'login') {
        localStorage.clear();
        localStorage.setItem(ACCESS_TOKEN, res.data.access);
        localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
        navigate('/');
      } else {
        navigate('/login');
      }
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form className="forms-container" onSubmit={handleSubmit}>
        <h1 id="form-title">{title}</h1>
        <input
          className="form-input"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        <input
          className="form-input"
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        {method === 'login' ? (
          <div id="have-account">
            <p>Don't Have an account? </p>
            <Link className="form-type" to="/register">
              Register
            </Link>
          </div>
        ) : (
          <div id="have-account">
            <p>Have an account? </p>
            <Link className="form-type" to="/login">
              Sign In
            </Link>
          </div>
        )}

        {loading && <LoadingIndicator />}
        <button type="submit" className="form-submit gold-button">
          {title}
        </button>
      </form>
    </>
  );
};

export default Forms;
