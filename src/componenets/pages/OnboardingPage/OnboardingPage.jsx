import React from "react";
import "./Onboarding.scss";
import logo from "../../../assets/images/Creativehub.png";
import { Link } from "react-router-dom";
import creator from "../../../assets/images/creator.svg";
import business from "../../../assets/images/business.svg";

function OnboardingPage() {
  return (
    <>
      <Link to="/">
        <img className="logo" src={logo} alt="logo" />
      </Link>

      <div className="onboarding">
        <h1 className="onboarding__title">Choose your profile type</h1>
        <h2 className="onboarding__subtitle">
          Choose your experience by selecting the profile type
        </h2>
        <div className="onboarding__profile">
          <Link to="/signup" className="onboarding__profile__option">
            <button className="onboarding__profile__option__btn">
              <img src={creator} alt="creator" />
            </button>
            <p className="onboarding__profile__option__text">Creator</p>
          </Link>

          <div className="onboarding__profile__option">
            <button className="onboarding__profile__option__btn">
              <img src={business} alt="business" />
            </button>
            <p className="onboarding__profile__option__text">Business</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default OnboardingPage;
