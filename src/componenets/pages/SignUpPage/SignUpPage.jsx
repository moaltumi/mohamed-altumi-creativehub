import React, { useState } from "react";
import "./SignUpPage.scss";
import logo from "../../../assets/images/Creativehub.png";
import { Link } from "react-router-dom";

function SignUpPage() {
  const [userData, setUserDataLocal] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setUserDataLocal((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const saveUserData = () => {
    if (!userData.name || !userData.email || !userData.phone) {
      alert("Please fill in all fields");
    }
    return;
  };
  return (
    <div className="signup">
      <div className="signup__logo">
        <Link to="/">
          <img className="signup__logo__icon" src={logo} alt="logo" />
        </Link>
      </div>

      <div className="signup__card">
        <h1 className="signup__card__title">Your Profile info</h1>
        <p className="signup__card__subtitle">
          We fetch basic info from Instagram to speed up your onboarding process
          and enhance your influencer collaboration experience.
        </p>

        <form className="signup__card__form">
          <div className="signup__card__form__name">
            <label className="signup__card__form__name__label">
              Instagram Username
            </label>
            <input
              className="signup__card__form__name__input"
              type="text"
              id="name"
              value={userData.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="signup__card__form__info">
            <div>
              <label className="signup__card__form__info__label">Email</label>
              <input
                className="signup__card__form__info__input"
                type="text"
                id="email"
                value={userData.email}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="signup__card__form__info__label">Phone</label>

              <input
                className="signup__card__form__info__input"
                type="text"
                id="phone"
                value={userData.phone}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </form>
        <Link to="/Onboarding/Feeds">
          <button className="signup__card__button" onClick={saveUserData}>
            Next
          </button>
        </Link>
      </div>
    </div>
  );
}

export default SignUpPage;
