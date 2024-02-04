import React, { useState, useEffect } from "react";
import "./Feeds.scss";
import instagramlogo from "../../../assets/images/instagramblack2.svg";
import axios from "axios";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/Creativehub.png";
import discoverbrand from "../../../assets/images/binocular.svg";
import profileimage from "../../../assets/images/IMG_1934.jpg";

const Feeds = () => {
  const [imageData, setImageData] = useState([]);
  const [userData, setUserData] = useState({});
  const [apiCalled, setApiCalled] = useState(false);

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
        <div className="single-feed__header">
          <Link to="/">
            <img className="logo" src={logo} alt="logo" />
          </Link>

          <div className="single-feed__header__discover">
            <Link to="/discoverbrands">
              <img
                className="single-feed__header__discover__icon"
                src={discoverbrand}
                alt="Discover Brands"
              />
            </Link>
          </div>
        </div>

        <div className="profile-card">
          <div className="profile-card__rowone">
            <Link
              to="https://www.instagram.com/altumitravels/"
              className="profile-card__rowone__info"
            >
              <img
                className="profile-card__rowone__info__logo"
                src={instagramlogo}
              />
              <p className="profile-card__rowone__info__text">altumitravels</p>
            </Link>

            <img
              className="profile-card__rowone__image"
              src={profileimage}
              alt="Profile"
            />

            <div className="profile-card__rowone__stats">
              <p className="profile-card__rowone__stat-value">34</p>
              <p className="profile-card__rowone__stat-label">Posts</p>
            </div>
            <div className="profile-card__rowone__stats">
              <p className="profile-card__rowone__stat-value">691</p>
              <p className="profile-card__rowone__stat-label">followers</p>
            </div>

            <div className="profile-card__rowone__stats">
              <p className="profile-card__rowone__stat-value">1022</p>
              <p className="profile-card__rowone__stat-label">following</p>
            </div>
          </div>
        </div>

        <div
          className="profile-card__rowthree"
          style={{ display: apiCalled ? "none" : "flex" }}
        >
          <h1 className="profile-card__rowthree__title">Set up your profile</h1>
          <p className="profile-card__rowthree__subtitle">
            {" "}
            Get started on your journey to meaningful connections and impactful
            collaborations now!
          </p>
          <div className="profile-card__rowthree__buttons">
            {/* <button className="profile-card__rowtwo__buttons__upload">
              Upload Images
            </button> */}
            <button
              className="profile-card__rowthree__buttons__upload-ig"
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
      </div>
    </>
  );
};

export default Feeds;
