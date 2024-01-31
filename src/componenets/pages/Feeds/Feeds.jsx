import React, { useState, useEffect } from "react";
import "./Feeds.scss";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import logo from "../../../assets/images/Creativehub.png";

const Feeds = () => {
  const [imageData, setImageData] = useState([]);
  const [userData, setUserData] = useState({});
  const [apiCalled, setApiCalled] = useState(false);
  const location = useLocation();

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://v1.nocodeapi.com/moaltumi/instagram/LjiPFPDYOXVoZBBQ"
      );

      // Filter only the data with media_type === "IMAGE"
      const images = response.data.data.filter(
        (post) =>
          post.media_type === "IMAGE" || post.media_type === "CAROUSEL_ALBUM"
      );

      setImageData(images);
      setApiCalled(true);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleUploadFromInstagram = () => {
    fetchData();
  };

  useEffect(() => {}, []);

  return (
    <>
      <div className="single-feed">
        <Link to="/">
          <img className="logo" src={logo} alt="logo" />
        </Link>
        <div className="profile-card">
          <div className="profile-card__rowone">
            <div className="profile-card__rowone__header">
              <p className="profile-card__rowone__header__name">
                altumitravels
              </p>
              <img
                className="profile-card__rowone__header__badge"
                src=""
                alt="iglogo"
              />
            </div>
          </div>

          <div className="profile-card__rowtwo">
            <img
              className="profile-card__rowtwo__image"
              src="https://via.placeholder.com/176x176"
              alt="Profile"
            />
            <div className="profile-card__rowtwo__stats">
              <p className="profile-card__rowtwo__stat-value">309</p>
              <p className="profile-card__rowtwo__stat-label">Posts</p>
            </div>
            <div className="profile-card__rowtwo__stats">
              <p className="profile-card__rowtwo__stat-value">2m</p>
              <p className="profile-card__rowtwo__stat-label">followers</p>
            </div>

            <div className="profile-card__rowtwo__stats">
              <p className="profile-card__rowtwo__stat-value">200</p>
              <p className="profile-card__rowtwo__stat-label">following</p>
            </div>
          </div>

          <div className="profile-card__rowthree">
            <div className="profile-card__rowthree__pricing">
              <p className="profile-card__pricing-label">Your Pricing:</p>
              <p className="profile-card__pricing-amount">$300</p>

              <p className="Profile__details__rowtow__email">
                {userData.email}
              </p>
              <p className="Profile__details__rowtwo__phone">
                {userData.phone}
              </p>
            </div>
            <Link to="/discoverbrands">
              <button className="profile-card__rowthree__discover">
                Disocver Brands
              </button>
            </Link>
          </div>
        </div>

        <div
          className="profile-card__rowfour"
          style={{ display: apiCalled ? "none" : "flex" }}
        >
          <h1 className="profile-card__rowfour__title">Set up your profile</h1>
          <p className="profile-card__rowfour__subtitle">
            {" "}
            Get started on your journey to meaningful connections and impactful
            collaborations now!
          </p>
          <div className="profile-card__rowfour__buttons">
            {/* <button className="profile-card__rowthree__buttons__upload">
              Upload Images
            </button> */}
            <button
              className="profile-card__rowfour__buttons__upload-ig"
              onClick={handleUploadFromInstagram}
            >
              Import from Instagram
            </button>
          </div>
        </div>

        <div className="profile-card__galery">
          {imageData.map((image, index) => (
            <div className="card" key={index}>
              <img
                className="profile-card__galery__image"
                src={image.media_url}
                // alt={`Image ${index + 1}`}
              />
            </div>
          ))}
        </div>
        {/* <div className="Profile__details">
        <div className="Profile__details__rowone">
          <p className="Profile__details__rowone__name">{userData.name}</p>
          <Link to="/instagram.com/">
            <img
              className="Profile__details__rowone__image"
              src=""
              alt="instagram logo"
            />
          </Link>
        </div>
        <div className="Profile__details__rowtwo">
          <img
            className="Profile__details__rowtow__image"
            src=""
            alt="profileimage"
          />
          <p className="Profile__details__rowtow__location">category : </p>
          <p className="Profile__details__rowtow__email">followers :</p>
          <p className="Profile__details__rowtwo__phone">price : </p>
        </div>

        <div className="Profile__details__rowthree">
          <p className="Profile__details__rowtow__location">location</p>
          <p className="Profile__details__rowtow__email">{userData.email}</p>
          <p className="Profile__details__rowtwo__phone">{userData.phone}</p>
        </div>
      </div> */}
      </div>
    </>
  );
};

export default Feeds;
