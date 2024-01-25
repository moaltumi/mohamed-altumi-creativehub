import React from "react";
import "./Onboarding.scss";
import logo from "../../../assets/images/Creativehub.png";
import { Link } from "react-router-dom";

function Onboarding() {
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
        <button className="onboarding__button">
          Get Started With Instagram
        </button>
        <p className="onboarding__text">
          Already have an account?{" "}
          <Link className="onboarding__text__signin">Signin</Link>
        </p>
      </div>
    </>
  );
}
export default Onboarding;
