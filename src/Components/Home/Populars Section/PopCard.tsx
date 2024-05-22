import React from 'react';
import './PopCard.css';
import { NavLink } from 'react-router-dom';

interface props {
  name: string;
  img: string;
  description: string;
  path: string;
}

const PopCard = ({ name, img, description, path }: props) => {
  return (
    <>
      <div className="popCard">
        <img src={img} alt={name} />
        <div>
          <h4>{name}</h4>
          <p>{description}</p>
          <NavLink to={path}>View</NavLink>
        </div>
      </div>
    </>
  );
};

export default PopCard;
