import React, { useState } from "react";
import { Link, Route, useLocation } from "react-router-dom";
import logo from "../images/logo.svg";

const Header = ({ email, isLoggedIn, SignOut }) => {

  const location = useLocation();
  const [isShowHeader, setIsShowHeader] = useState(false);
  
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__wrapper header__wrapper-mobile">
        
          <p className="header__email">{email}</p>
          <button className="header__text" onClick={SignOut}>Log Out</button>
        </div>
      <img className="header__image" src={logo} alt="Logo pic" />

      <div className="header__navbar">
        <button className={isShowHeader ? "header__menu-close" : "header__menu"}
         onClick={() => setIsShowHeader(show => !show)}></button>
        <div className="header__wrapper header__wrapper-desktop">
          <p className="header__email">{email}</p>
          <button className="header__text" onClick={SignOut}>Log Out</button>
        </div> 
              <div className='header__link-item'>
              {isLoggedIn && (
                <Link to={location.pathname === '/signin' ? '/signup' : 'signin'} className='header__link'>
                {location.pathname === '/signin' ? 'Sign up' : 'Sign in'}
              </Link>
              
              
            )}
            </div>
        
      </div>
      
      {/* <nav className="navbar">
      <button className="navbar__logo"></button>
      <ul className="navbar__nav">
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
        <li><Link to="ducks" className="navbar__link">Ducks</Link></li>
        <li><Link to="my-profile" className="navbar__link">My profile</Link></li>
        <li><button className="navbar__link navbar__button">Sign out</button></li>
      </ul>
    </div> */}

      {/* <nav className='header_navbar'>
          <ul
            className={`header__links ${
              isLogin || isRegister ? 'header__links_signup-login-page' : ''
            }`}
          >
            {isLogin && (
              <li className='header__link-item'>
                <Link to='/signup' className='header__link'>
                  Sign up
                </Link>
              </li>
            )}
            {isRegister && (
              <li className='header__link-item'>
                <Link to='/signin' className='header__link'>
                  Log in
                </Link>
              </li>
            )}
            {loggedIn && (
              <li className='header__link-item'>
                <Link
                  to='/signin'
                  className='header__link'
                  onClick={handleSignout}
                >
                  Log out
                </Link>
              </li>
            )}
            {loggedIn && <li className='header__link-item'>{email}</li>}
          </ul>
        </nav> */}

      
        {/* {isLoggedIn ? (
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
        )} */}
      </div>
    </header>
  );
};

export default Header;
