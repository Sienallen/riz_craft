import { useState } from 'react';
import { useNavigate } from 'react-router';
import AxiosInstance from '../../api';
import { ACCESS_TOKEN, REFRESH_TOKEN } from '../../constants';
import LoadingIndicator from './LoadingIndicator';

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
      const res = await AxiosInstance.post(route, { username, password });
      if (method === 'login') {
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
        <h1>{title}</h1>
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

        {loading && <LoadingIndicator />}
        <button type="submit" className="form-submit">
          {title}
        </button>
      </form>
    </>
  );
};

export default Forms;
