import React, { useState } from "react";
import "./SignUpPage.scss";
import logo from "../../../assets/images/Creativehub.png";
import profileimage from "../../../assets/images/profileimage.png";
import { Link, useNavigate } from "react-router-dom";

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

  const navigate = useNavigate();

  const saveUserData = () => {
    // Validation: Check if any field is empty before saving
    if (!userData.name || !userData.email || !userData.phone) {
      alert("Please fill in all fields before proceeding.");
      return;
    }

    // Navigate to the next page with user data as state
    navigate("/onboarding/Feeds", { state: { userData } });
  };

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
              value={userData.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="signup__form__info">
            <div>
              <label className="signup__form__info__label">Email</label>
              <input
                className="signup__form__info__input"
                type="email"
                id="email"
                value={userData.email}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="signup__form__info__label">Phone</label>

              <input
                className="signup__form__info__input"
                type="text"
                id="phone"
                value={userData.phone}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </form>
        <div>
          <button className="signup__button" onClick={saveUserData}>
            Next
          </button>
        </div>
      </div>
    </>
  );
}

export default SignUpPage;
