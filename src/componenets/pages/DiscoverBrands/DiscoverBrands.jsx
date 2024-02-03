import { useState, useEffect } from "react";
import React from "react";
// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./DiscoverBrands.scss";
import instagramLogo from "../../../assets/images/instagramblack2.svg";
import logo from "../../../assets/images/Creativehub.png";
import connect from "../../../assets/images/connect.svg";
import { Link } from "react-router-dom";

const DiscoverBrands = () => {
  const [travelBrands, setTravelBrands] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(""); // Default to an empty string to show all data initially

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3030/travelBrands");
        const data = await response.json();
        setTravelBrands(data.travelBrands);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleLocationChange = (event) => {
    setSelectedLocation(event.target.value);
  };

  // Filter brands based on selectedLocation
  const filteredBrands = selectedLocation
    ? travelBrands.filter((brand) => brand.location === selectedLocation)
    : travelBrands; // Show all data if no location is selected

  return (
    <>
      <div className="discover">
        <div className="discover__profile-card">
          <Link to="/">
            <img
              className="discover__profile-card__logo"
              src={logo}
              alt="logo"
            />
          </Link>

          <div className="discover__profile-card__rowone">
            <div className="discover__profile-card__rowone__select">
              <select
                className="discover__profile-card__rowone__select-location"
                value={selectedLocation}
                onChange={handleLocationChange}
              >
                <option
                  className="discover__profile-card__rowone__select-location__option"
                  value="VANCOUVER"
                >
                  VANCOUVER
                </option>
                <option
                  className="discover__profile-card__rowone__select-location__option"
                  value="TORONTO"
                >
                  TORONTO
                </option>
                <option
                  className="discover__profile-card__rowone__select-location__option"
                  value="LOS ANGELES"
                >
                  LOS ANGELES
                </option>
              </select>
            </div>
            <div className="discover__profile-card__rowone__select">
              <select className="discover__profile-card__rowone__select-followers">
                <option
                  className="discover__profile-card__rowone__select-followers__option"
                  value="1000"
                >
                  1k
                </option>
                <option
                  className="discover__profile-card__rowone__select-followers__option"
                  value="5000"
                >
                  5k
                </option>
                <option
                  className="discover__profile-card__rowone__select-followers__option"
                  value="10000"
                >
                  10k
                </option>
              </select>
            </div>

            <div className="discover__profile-card__rowone__select">
              <select className="discover__profile-card__rowone__select-budget">
                <option
                  className="discover__profile-card__rowone__select-budget__option"
                  value="1000"
                >
                  $100
                </option>
                <option
                  className="discover__profile-card__rowone__select-budget__option"
                  value="5000"
                >
                  $500
                </option>
                <option
                  className="discover__profile-card__rowone__select-budget__option"
                  value="10000"
                >
                  $1000
                </option>
              </select>
            </div>
            <div className="discover__profile-card__rowone__select">
              <button className="discover__profile-card__rowone__select-search"></button>
            </div>
          </div>
        </div>

        <div className="discover__gallery">
          {filteredBrands.map((brand) => (
            <div className="discover__gallery__profile" key={brand.name}>
              <div className="discover__gallery__profile__header">
                <span className="discover__gallery__profile__header">
                  <img
                    className="discover__gallery__profile__header__image"
                    src={brand.profile_image}
                    alt="profileimage"
                  />
                  <h3 className="discover__gallery__profile__header__name">
                    {brand.name}
                  </h3>
                </span>
                <span className="discover__gallery__profile__header">
                  <p className="discover__gallery__profile__header__followers">
                    {brand.brand_followers} followers
                  </p>
                  <Link to={brand.igurl}>
                    <img
                      className="discover__gallery__profile__header__instagram"
                      src={instagramLogo}
                      alt="iglogo"
                    />
                  </Link>
                </span>
              </div>

              <div className="discover__gallery__profile__post">
                <img
                  className="discover__gallery__profile__post__image"
                  src={brand.main_image}
                  alt="images"
                />
                <div className="discover__gallery__profile__post__back-content">
                  {/* Content for the back of the image */}
                  <div className="discover__gallery__profile__post__back-content__rowone">
                    <p className="discover__gallery__profile__post__back-content__rowone__about">
                      About: <br />
                      {brand.about}
                    </p>{" "}
                    <p className="discover__gallery__profile__post__back-content__rowone__description">
                      Job Description: <br />
                      {brand.job_description}
                    </p>
                  </div>
                  <div className="discover__gallery__profile__post__back-content__rowtwo">
                    <p className="discover__gallery__profile__post__back-content__rowtwo__budget">
                      {" "}
                      Budget: {brand.budget}
                    </p>
                    <p className="discover__gallery__profile__post__back-content__rowtwo__reqfollowers">
                      {" "}
                      Required followers: {brand.followers_required}
                    </p>

                    <div className="discover__gallery__profile__post__back-content__rowtwo__link">
                      <p className="discover__gallery__profile__post__back-content__rowtwo__link__text">
                        Connect Now
                      </p>
                      <Link to={brand.igurl}>
                        <img
                          className="discover__gallery__profile__post__back-content__rowtwo__link__connect"
                          src={connect}
                          alt="connect"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DiscoverBrands;
