import { Link } from 'react-router-dom';
import './DropDownProfile.css';
import { Dispatch, SetStateAction } from 'react';

interface prop {
  /*   route: string; */
  method: string;
  setDropDown: Dispatch<SetStateAction<boolean>>;
  dropDown: boolean;
}

const DropDownProfile = ({ method, setDropDown, dropDown }: prop) => {
  const name = method === 'login' ? 'Sign in' : 'Sign out';

  return (
    <div id="drop-down-menu" className={dropDown ? 'fade-in' : 'fade-out'}>
      <p>Profile</p>
      <p>Settings</p>
      <p>
        {name === 'Sign in' ? (
          <Link to="/login" onClick={() => setDropDown(false)}>
            {name}{' '}
          </Link>
        ) : (
          name
        )}
      </p>
    </div>
  );
};

export default DropDownProfile;
