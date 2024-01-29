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
            <a className="navbar__link-active" href="#">
              Home
            </a>
          </li>
          <li className="navbar__item">
            <a className="navbar__link" href="#">
              About
            </a>
          </li>
          <li className="navbar__item">
            <a className="navbar__link" href="#">
              Contact
            </a>
          </li>
        </ul>
        <Link to="/Onboarding">
          <button className="navbar__button" href="#">
            Get Started
          </button>
        </Link>
      </nav>

      <div className="hero">
        <div className="hero__col__one">
          <h1 className="hero__col__one__title">
            Unlcok the Power of Influence for your Business
          </h1>
          <p className="hero__col__one__subtitle">
            Connect with Influencers to skyrocket your product reach
          </p>
          <Link to="/Onboarding">
            <button className="hero__col__one__button">Get Started</button>
          </Link>
          <p className="hero__col__one__signup">
            looking to Collab with Brands?
            <Link to="/Signup" className="hero__col__one__signup-link">
              {" "}
              Signup as an influencer{" "}
            </Link>
          </p>
        </div>

        <div className="hero__col__two">
          <img src={hero} className="hero__col__two__image" alt="influencer" />
        </div>
      </div>
    </header>
  );
};
export default Header;
