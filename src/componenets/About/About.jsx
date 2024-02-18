import React from "react";
import "./About.scss";
import logo from "../../assets/images/Creativehub.png";
import team from "../../assets/images/_0007_Mohamed_Altumi_1010.jpg";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="about">
      <nav className="about__navbar">
        <Link to="/">
          <img className="about__navbar__logo" src={logo} alt="logo" />
        </Link>

        <ul className="about__navbar__menu">
          <li className="about__navbar__item">
            <Link to="/" className="about__navbar__link">
              Home
            </Link>
          </li>
          <li className="about__navbar__item">
            <Link to="/about " className="about__navbar__link-active">
              About
            </Link>
          </li>
          <li className="about__navbar__item">
            <Link to="/Contact" className="about__navbar__link">
              Contact
            </Link>
          </li>
        </ul>
        <Link className="about__navbar__link" to="/Onboarding">
          <button className="about__navbar__button">Get Started</button>
        </Link>
      </nav>

      <div className="about__card">
        <h1 className="about__card__title">About Us</h1>
        <p className="about__card__subtitle">
          Within the vast landscape of influencer marketing, CreativeHub
          streamlines the intricate process of discovering the perfect
          influencers for your brand. Our platform houses a comprehensive and
          thoughtfully curated database that spans various niches and
          industries. Whether your focus is on a particular demographic,
          geographic location, or niche market, our user-friendly search and
          filter features empower you to precisely identify influencers who
          seamlessly align with your brand ethos.
        </p>
      </div>
    </div>
  );
};

export default About;
