import { RiArrowDownSLine } from 'react-icons/ri';
import './Footer.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Footer = () => {
  const [dropDown, setDropDown] = useState('');

  function handleAdd(newDrop: string) {
    dropDown === newDrop ? setDropDown('') : setDropDown(newDrop);
  }

  return (
    <>
      <div className="footer-container">
        <div>
          <h2>Riz's Crafts</h2>
        </div>
        <div className="foot-headers" id="sitemap">
          <div className="site-title" onClick={() => handleAdd('site-links')}>
            <h4>SiteMap</h4>
            <RiArrowDownSLine id="down-arrow" />
          </div>

          <ul
            id="site-links "
            className={`footer-dropdown dropdown-collapse ${
              dropDown === 'site-links' ? ' dropdown-active' : ''
            }`}
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="shopPage">Shop</Link>
            </li>
            <li>
              <Link to="aboutPage">About</Link>
            </li>
            <li>
              <Link to="contactsPage">Contacts</Link>
            </li>
          </ul>
        </div>
        <div
          className="foot-headers"
          id="contacts"
          onClick={() => handleAdd('contact-info')}
        >
          <div className="site-title">
            <h4>Contacts</h4>
            <RiArrowDownSLine id="down-arrow" />
          </div>
          <ul
            id="contact-info"
            className={`footer-dropdown dropdown-collapse ${
              dropDown === 'contact-info' ? ' dropdown-active' : ''
            }`}
          >
            <li>
              <p>RizCraft@gmail.com</p>
            </li>
            <li>
              <p>+1(234) 567-8910</p>
            </li>
          </ul>
        </div>
        <div
          className="foot-headers"
          id="socials"
          onClick={() => handleAdd('social-links')}
        >
          <div className="site-title">
            <h4>Socials</h4>
            <RiArrowDownSLine id="down-arrow" />
          </div>
          <ul
            id="social-links"
            className={`footer-dropdown dropdown-collapse ${
              dropDown === 'social-links' ? ' dropdown-active' : ''
            }`}
          >
            <li>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </li>
            <li>
              <a href="https://x.com" target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                YouTube
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
