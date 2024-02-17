import React from "react";
import "./Onboarding.scss";
import logo from "../../../assets/images/Creativehub.png";
import { Link } from "react-router-dom";
import creator from "../../../assets/images/creator.svg";
import business from "../../../assets/images/business.svg";

function OnboardingPage() {
  return (
    <div className="onboarding">
      <div className="onboarding__logo">
        <Link to="/">
          <img className="onboarding__logo__icon" src={logo} alt="logo" />
        </Link>
      </div>

      <div className="onboarding__card">
        <h1 className="onboarding__card__title">Choose your profile type</h1>
        <h2 className="onboarding__card__subtitle">
          Choose your experience by selecting the profile type
        </h2>
        <div className="onboarding__card__profile">
          <Link to="/signup" className="onboarding__card__profile__option">
            <button className="onboarding__card__profile__option__btn">
              <img
                className="onboarding__card__profile__option__btn__img"
                src={creator}
                alt="creator"
              />
            </button>
            <p className="onboarding__card__profile__option__text">Creator</p>
          </Link>

          <div className="onboarding__card__profile__option">
            <button className="onboarding__card__profile__option__btn">
              <img
                className="onboarding__card__profile__option__btn__img"
                src={business}
                alt="business"
              />
            </button>
            <p className="onboarding__card__profile__option__text">Business</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OnboardingPage;
