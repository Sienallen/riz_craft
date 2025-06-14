import { Link } from 'react-router-dom';

interface prop {
  route: string;
  method: string;
}

const DropDownProfile = ({ route, method }: prop) => {
  const name = method === 'login' ? 'Sign in' : 'Sign out';
  return (
    <div>
      <p>Profile</p>
      <p>Settings</p>
      {name === 'Sign in' ? <Link to="/Login">{name} </Link> : name}
    </div>
  );
};

export default DropDownProfile;
