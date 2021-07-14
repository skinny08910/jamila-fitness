import React from "react";
import { useStateContext } from "./GlobalState";

const TopSection = () => {
  const newState = useStateContext();

  return (
    <>
      {/* Header Section */}
      <header className="header-section">
        <div className="container">
          <nav className="navigation">
            {/* Left Nav */}
            <ul className="left-nav">
              <li className="left-nav__links">
                <a href="/" rel="noopener noreferrer">
                  Home
                </a>
              </li>
              <li className="left-nav__links">
                <a href="/" rel="noopener noreferrer">
                  Package
                </a>
              </li>
              <li className="left-nav__links">
                <a href="/" rel="noopener noreferrer">
                  About Trainer
                </a>
              </li>
            </ul>

            {/* Logo */}
            <div className="logo">
              <a href="/" rel="noopener noreferrer">
                <img src="img/Logo.png" alt="Logo" />
              </a>
            </div>

            {/* Right Nav */}
            <ul className="right-nav">
              <li className="right-nav__links">
                <a href="/" rel="noopener noreferrer">
                  Sign in
                </a>
              </li>
              <li className="right-nav__links right-nav__links--search">
                <a href="/" rel="noopener noreferrer">
                  <img src="img/Search.png" alt="Search bar" />
                </a>
              </li>
              <li className="right-nav__links right-nav__links--cart">
                <a href="/" rel="noopener noreferrer">
                  <img src="img/Cart.png" alt="Cart" />
                </a>
              </li>

              <li className="right-nav__links right-nav__links--hamburger-menu">
                <div className="menu-bar-container">
                  <div className="menu-bar"></div>
                  <div className="menu-bar"></div>
                  <div className="menu-bar"></div>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default TopSection;
