import { useState, useEffect } from "react";
import React from "react";
// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./DiscoverBrands.scss";
import instagramLogo from "../../../assets/images/Instagram_black.png";
import logo from "../../../assets/images/Creativehub.png";
import images from "../../../assets/images/images.jpeg";
import profileimage from "../../../assets/images/profileimage.png";
import connect from "../../../assets/images/connect.svg";
import { Link } from "react-router-dom";

const DiscoverBrands = () => {
  const [travelBrands, setTravelBrands] = useState([]);
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

          {/* logo and filter bar */}

          <div className="discover__profile-card__rowone">
            <div className="discover__profile-card__rowone__select">
              <button className="discover__profile-card__rowone__select-location">
                USA
              </button>
            </div>
            <div className="discover__profile-card__rowone__select">
              <button className="discover__profile-card__rowone__select-followers">
                360K
              </button>
            </div>

            <div className="discover__profile-card__rowone__select">
              <button className="discover__profile-card__rowone__select-budget">
                $200 - $500
              </button>
            </div>
            <div className="discover__profile-card__rowone__select">
              <button className="discover__profile-card__rowone__select-search"></button>
            </div>
          </div>
        </div>

        <div className="discover__gallery">
          {travelBrands.map((brand) => (
            <div className="discover__gallery__profile" key={brand.name}>
              <div className="discover__gallery__profile__header">
                <img
                  className="discover__gallery__profile__header__image"
                  src={brand.profileImage}
                  alt="profileimage"
                />
                <h3 className="discover__gallery__profile__header__name">
                  {brand.name}
                </h3>
                <p className="discover__gallery__profile__header__followers">
                  {brand.followers} followers
                </p>
                <img
                  className="discover__gallery__profile__header__instagram"
                  src={instagramLogo}
                  alt="iglogo"
                />
              </div>
              <div className="discover__gallery__profile__post">
                <img
                  className="discover__gallery__profile__post__image"
                  src={brand.mainImage}
                  alt="images"
                />
                <div className="discover__gallery__profile__post__back-content">
                  {/* Content for the back of the image */}
                  <p className="discover__gallery__profile__post__back-content__description">
                    {brand.description}
                  </p>
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
