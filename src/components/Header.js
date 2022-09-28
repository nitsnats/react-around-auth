import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../images/logo.svg";

const Header = ({ email, isLoggedIn, SignOut }) => {

  const location = useLocation();
  
  return (
    <header className="header">
      <img className="header__image" src={logo} alt="Logo pic" />

      <div className="header__container">
        {isLoggedIn ? (
          <div>
            <p className="header__email">{email}</p>
            <div className="header__text" onClick={SignOut}>Log Out</div>
          </div>
        ) : (  
            <div>
              <Link to={location.pathname === '/signin' ? '/signup' : 'signin'} className='header__link'>
                {location.pathname === '/signin' ? 'Sign up' : 'Sign in'}
              </Link>
            </div>
        )}
      </div>
    </header>
  );
};

export default Header;
