import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <footer>
        <div>
          <h2>Rizelle's Crafts</h2>
        </div>
        <div>
          <h4>SiteMap</h4>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">Shop</Link>
            </li>
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/">Contacts</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4>Contacts</h4>
          <ul>
            <li>
              <p>RizellesCraft@gmail.com</p>
            </li>
            <li>
              <p>+1(234) 567-8910</p>
            </li>
          </ul>
        </div>
        <div>
          <h4>SiteMap</h4>
          <ul>
            <li>
              <a>Facebook</a>
            </li>
            <li>
              <a>Twitter</a>
            </li>
            <li>
              <a>YouTube</a>
            </li>
            <li>
              <a>Instagram</a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
