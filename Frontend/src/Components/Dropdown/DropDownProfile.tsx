import React from 'react';
import { Link } from 'react-router-dom';

interface prop {
  route: string;
  method: string;
}

const DropDownProfile = ({ route, method }: prop) => {
  return (
    <div>
      <p>Profile</p>
      <p>Settings</p>
      <Link to="/Login">Sign in </Link>
    </div>
  );
};

export default DropDownProfile;
