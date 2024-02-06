import React from "react";
import "./Header.scss";
import logo from "../../assets/images/Creativehub.png";
import hero from "../../assets/images/heroimage.png";
import { Link } from "react-router-dom";
import Onboarding from "../pages/OnboardingPage/OnboardingPage";
import axios from "axios";

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <Link to="/">
          <img className="navbar__logo" src={logo} alt="logo" />
        </Link>

        <ul className="navbar__menu">
          <li className="navbar__item">
            <a className="navbar__link-active">Home</a>
          </li>
          <li className="navbar__item">
            <Link to="/about " className="navbar__link">
              About
            </Link>
          </li>
          <li className="navbar__item">
            <Link to="/Contact" className="navbar__link">
              Contact
            </Link>
          </li>
        </ul>
        <Link to="/Onboarding">
          <button className="navbar__button">Get Started</button>
        </Link>
      </nav>

      <div className="hero">
        <div className="hero__col__one">
          <h1 className="hero__col__one__title">
            Unlock the Power of Influence for your Business
          </h1>
          <p className="hero__col__one__subtitle">
            Connect with Influencers to skyrocket your product reach
          </p>
          <Link to="/Onboarding">
            <button className="hero__col__one__button">Get Started</button>
          </Link>
        </div>

        <div className="hero__col__two">
          <img src={hero} className="hero__col__two__image" alt="influencer" />
        </div>
      </div>
    </header>
  );
};
export default Header;
