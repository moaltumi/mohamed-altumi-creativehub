import React from "react";
import "./SignUpPage.scss";
import logo from "../../../assets/images/Creativehub.png";
import profileimage from "../../../assets/images/profileimage.png";
import { Link } from "react-router-dom";

function SignUpPage() {
  return (
    <>
      <div>
        <Link to="/">
          <img className="logo" src={logo} alt="logo" />
        </Link>
      </div>

      <div className="signup">
        <h1 className="signup__title">Your Profile info</h1>
        <p className="signup__subtitle">
          We fetch basic info from Instagram to speed up your onboarding process
          and enhance your influencer collaboration experience.
        </p>

        <img className="signup__image" src={profileimage} alt="profileimage" />
        <input className="signup__image__button" type="file" />

        <form className="signup__form">
          <div className="signup__form__name">
            <label className="signup__form__name__label">Name</label>
            <input
              className="signup__form__name__input"
              type="text"
              id="name"
            />
          </div>
          <div className="signup__form__info">
            <div>
              <label className="signup__form__info__label">Email</label>
              <input
                className="signup__form__info__input"
                type="email"
                id="email"
              />
            </div>
            <div>
              <label className="signup__form__info__label">Phone</label>

              <input
                className="signup__form__info__input"
                type="text"
                id="phone"
              />
            </div>
          </div>
        </form>
        <Link to="/signup/category">
          <button className="signup__button">Next</button>
        </Link>
      </div>
    </>
  );
}

export default SignUpPage;
