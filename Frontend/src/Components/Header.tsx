import { RxHamburgerMenu } from 'react-icons/rx';
import { CgProfile } from 'react-icons/cg';
import './Header.css';
import { Link, NavLink } from 'react-router-dom';
import { IoClose } from 'react-icons/io5';
import DropDownProfile from './Dropdown/DropDownProfile';
import { useState } from 'react';

const Header = () => {
  const [dropDown, setDropDown] = useState<boolean>(false);

  const openDropDown = () => {
    setDropDown(!dropDown);
  };

  return (
    <header>
      <div className="media-header">
        <h2 id="site-title">Riz's Craft</h2>

        <label htmlFor="sidebar-active" id="open-sidebar">
          <RxHamburgerMenu id="hamburger" />
        </label>
      </div>

      <nav>
        <input type="checkbox" id="sidebar-active" />
        <label htmlFor="sidebar-active" id="overlay"></label>
        <div id="nav-links">
          <label htmlFor="sidebar-active" id="close-sidebar">
            <IoClose id="close" />
          </label>

          <Link to="/" id="header-title">
            Riz's Crafts
          </Link>
          <ul>
            <li>
              <NavLink to="/" preventScrollReset={true}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="shopPage" preventScrollReset={true}>
                Shop
              </NavLink>
            </li>
            <li>
              <NavLink to="aboutPage" preventScrollReset={true}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="contactsPage" preventScrollReset={true}>
                Contacts
              </NavLink>
            </li>
          </ul>

          <div className="icons">
            <Link to={'favPage'}>
              <svg
                className="icon-button"
                xmlns="http://www.w3.org/2000/svg"
                height="40"
                viewBox="0 -960 960 960"
                width="40"
              >
                <path
                  d="M440-501Zm0 381L313-234q-72-65-123.5-116t-85-96q-33.5-45-49-87T40-621q0-94 63-156.5T260-840q52 0 99 22t81 62q34-40 81-62t99-22q81 0 136 45.5T831-680h-85q-18-40-53-60t-73-20q-51 0-88 27.5T463-660h-46q-31-45-70.5-72.5T260-760q-57 0-98.5 39.5T120-621q0 33 14 67t50 78.5q36 44.5 98 104T440-228q26-23 61-53t56-50l9 9 19.5 19.5L605-283l9 9q-22 20-56 49.5T498-172l-58 52Zm280-160v-120H600v-80h120v-120h80v120h120v80H800v120h-80Z"
                  className="icon"
                />
              </svg>
            </Link>
            <Link to={'cartPage'}>
              <svg
                className="icon-button"
                width="40"
                height="40"
                viewBox="0 0 46 47"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M39.7273 28.5378V35.095H46V39.4665H39.7273V46.0238H35.5455V39.4665H29.2727V35.095H35.5455V28.5378H39.7273ZM23 24.1663C20.7 24.1663 18.8182 26.1335 18.8182 28.5378C18.8182 30.9421 20.7 32.9093 23 32.9093C25.3 32.9093 27.1818 30.9421 27.1818 28.5378C27.1818 26.1335 25.3 24.1663 23 24.1663ZM25.8227 41.6523H9.40909C7.48545 41.6523 5.87545 40.2971 5.39455 38.4611L0.0836363 18.1992C-7.45058e-08 18.0025 0 17.8058 0 17.6091C0 16.4069 0.940909 15.4233 2.09091 15.4233H12.1064L21.2645 1.10669C21.6618 0.472827 22.3309 0.123108 23 0.123108C23.6691 0.123108 24.3382 0.472827 24.7355 1.08484L33.8936 15.4233H43.9091C45.0591 15.4233 46 16.4069 46 17.6091L45.9373 18.1992L43.9091 25.9368C42.7173 25.2592 41.3791 24.6909 39.9782 24.4067L41.1909 19.7948H4.83L9.40909 37.2808H25.0909C25.0909 38.8108 25.3627 40.2752 25.8227 41.6523ZM17.1455 15.4233H28.8545L23 6.2432L17.1455 15.4233Z"
                  fill="#495E57"
                  className="icon"
                />
              </svg>
            </Link>
            <div id="profile-dropdown">
              <div onClick={openDropDown}>
                <CgProfile className="icon-button profile" />
              </div>

              <DropDownProfile setDropDown={setDropDown} dropDown={dropDown} />
            </div>
          </div>
        </div>
      </nav>
      <div id="spacer"></div>
    </header>
  );
};

export default Header;
