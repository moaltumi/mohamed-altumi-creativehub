import React from "react";
import "./Onboarding.scss";
import logo from "../../../assets/images/Creativehub.png";
import { Link } from "react-router-dom";

function OnboardingPage() {
  return (
    <>
      <Link to="/">
        <img className="logo" src={logo} alt="logo" />
      </Link>

      <div className="onboarding">
        <h1 className="onboarding__title">Welcome to Creativehub</h1>
        <h2 className="onboarding__subtitle">
          Connect with Influencers to Skyrocket Your Product's Reach
        </h2>
        <Link to="./Feeds">
          <button className="onboarding__button">
            Get Started With Instagram
          </button>
        </Link>
        <p className="onboarding__text">
          Already have an account?{" "}
          <Link className="onboarding__text__signin">Sign in</Link>
        </p>
      </div>
    </>
  );
}

export default OnboardingPage;
