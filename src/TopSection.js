import React from "react";
import { useStateContext } from "./GlobalState";

const TopSection = () => {
  const newState = useStateContext();

  return (
    <>
      {/******************** Header Section */}
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
                  <img src="img/Search.png" alt="Search icon" />
                </a>
              </li>
              <li className="right-nav__links right-nav__links--cart">
                <a href="/" rel="noopener noreferrer">
                  <img src="img/Cart.png" alt="Cart icon" />
                </a>
              </li>

              <li className="right-nav__links right-nav__links--hamburger-menu">
                <div className="menu-bar"></div>
                <div className="menu-bar"></div>
                <div className="menu-bar"></div>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/******************** Jumbo Section */}
      <section className="jumbo-section">
        <div className="container">
          <div className="jumbo-section-content">
            {/* Left Text */}
            <div className="left-text">
              <div className="left-text__title">
                <span className="left-text__title__small">Let's take</span>
                <span className="left-text__title__big">Challenge</span>
              </div>

              <p className="left-text__paragraph">
                Upgrade your style staples with this most hyped designs Give in
                to those new-season need-new-clothes cravings with our range of
                T-shirts, jeans and jackets.
              </p>

              <div className="left-text__button">Get Started</div>

              {/* <div className="left-text__social-media">
              <a href="/" rel="noopener noreferrer">
                <img src="img/Facebook-icon.png" alt="Facebook icon" />
              </a>
              <a href="/" rel="noopener noreferrer">
                <img src="img/Tweeter-icon.png" alt="Tweeter icon" />
              </a>
              <a href="/" rel="noopener noreferrer">
                <img src="img/Instagram-icon.png" alt="Instagram icon" />
              </a>
              <a href="/" rel="noopener noreferrer">
                <img src="img/YouTube-icon.png" alt="YouTube icon" />
              </a>
            </div> */}
            </div>

            {/* Right Text */}
            <div className="right-text">
              <span className="right-text__content right-text__first">
                Are you
              </span>
              <span className="right-text__content right-text__second">
                Summer
              </span>
              <span className="right-text__content right-text__third">
                Ready
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TopSection;
