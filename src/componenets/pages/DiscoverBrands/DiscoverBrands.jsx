import React from "react";
import "./DiscoverBrands.scss";
import logo from "../../../assets/images/Creativehub.png";
import images from "../../../assets/images/images.jpeg";
import profileimage from "../../../assets/images/profileimage.png";
import connect from "../../../assets/images/connect.svg";
import { Link } from "react-router-dom";

const DiscoverBrands = () => {
  return (
    <>
      <div className="discover">
        <Link to="/">
          <img className="logo" src={logo} alt="logo" />
        </Link>

        <div className="discover__profile-card">
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

          <div className="discover__profile-card__gallery">
            <div className="discover__profile-card__gallery__rowtwo">
              <div className="discover__profile-card__gallery__rowtwo__profile">
                <img
                  className="discover__profile-card__gallery__rowtwo__profile__image"
                  src={profileimage}
                  alt="profileimage"
                />
                <h3 className="discover__profile-card__gallery__rowtwo__profile__name">
                  Beautifuldestinations
                </h3>
                <p className="discover__profile-card__gallery__rowtwo__profile__followers">
                  145k followers
                </p>
                <img
                  className="discover__profile-card__gallery__rowtwo__profile__instagram"
                  src={connect}
                  alt="iglogo"
                />
              </div>

              <div className="discover__profile-card__gallery__rowtwo__post">
                <img
                  className="discover__profile-card__gallery__rowtwo__post-image"
                  src={images}
                  alt="images"
                />
                <p className="discover__profile-card__gallery__rowtwo__post-description">
                  looking for
                </p>
              </div>
            </div>

            <div className="discover__profile-card__gallery__rowtwo">
              <div className="discover__profile-card__gallery__rowtwo__profile">
                <img
                  className="discover__profile-card__gallery__rowtwo__profile__image"
                  src={profileimage}
                  alt="profileimage"
                />
                <h3 className="discover__profile-card__gallery__rowtwo__profile__name">
                  Beautifuldestinations
                </h3>
                <p className="discover__profile-card__gallery__rowtwo__profile__followers">
                  145k followers
                </p>
                <img
                  className="discover__profile-card__gallery__rowtwo__profile__instagram"
                  src={connect}
                  alt="iglogo"
                />
              </div>

              <div className="discover__profile-card__gallery__rowtwo__post">
                <img
                  className="discover__profile-card__gallery__rowtwo__post-image"
                  src={images}
                  alt="images"
                />
                <p className="discover__profile-card__gallery__rowtwo__post-description">
                  looking for
                </p>
              </div>
            </div>
            <div className="discover__profile-card__gallery__rowtwo">
              <div className="discover__profile-card__gallery__rowtwo__profile">
                <img
                  className="discover__profile-card__gallery__rowtwo__profile__image"
                  src={profileimage}
                  alt="profileimage"
                />
                <h3 className="discover__profile-card__gallery__rowtwo__profile__name">
                  Beautifuldestinations
                </h3>
                <p className="discover__profile-card__gallery__rowtwo__profile__followers">
                  145k followers
                </p>
                <img
                  className="discover__profile-card__gallery__rowtwo__profile__instagram"
                  src={connect}
                  alt="iglogo"
                />
              </div>

              <div className="discover__profile-card__gallery__rowtwo__post">
                <img
                  className="discover__profile-card__gallery__rowtwo__post-image"
                  src={images}
                  alt="images"
                />
                <p className="discover__profile-card__gallery__rowtwo__post-description">
                  looking for
                </p>
              </div>
            </div>
            <div className="discover__profile-card__gallery__rowtwo">
              <div className="discover__profile-card__gallery__rowtwo__profile">
                <img
                  className="discover__profile-card__gallery__rowtwo__profile__image"
                  src={profileimage}
                  alt="profileimage"
                />
                <h3 className="discover__profile-card__gallery__rowtwo__profile__name">
                  Beautifuldestinations
                </h3>
                <p className="discover__profile-card__gallery__rowtwo__profile__followers">
                  145k followers
                </p>
                <img
                  className="discover__profile-card__gallery__rowtwo__profile__instagram"
                  src={connect}
                  alt="iglogo"
                />
              </div>

              <div className="discover__profile-card__gallery__rowtwo__post">
                <img
                  className="discover__profile-card__gallery__rowtwo__post-image"
                  src={images}
                  alt="images"
                />
                <p className="discover__profile-card__gallery__rowtwo__post-description">
                  looking for
                </p>
              </div>
            </div>
            <div className="discover__profile-card__gallery__rowtwo">
              <div className="discover__profile-card__gallery__rowtwo__profile">
                <img
                  className="discover__profile-card__gallery__rowtwo__profile__image"
                  src={profileimage}
                  alt="profileimage"
                />
                <h3 className="discover__profile-card__gallery__rowtwo__profile__name">
                  Beautifuldestinations
                </h3>
                <p className="discover__profile-card__gallery__rowtwo__profile__followers">
                  145k followers
                </p>
                <img
                  className="discover__profile-card__gallery__rowtwo__profile__instagram"
                  src={connect}
                  alt="iglogo"
                />
              </div>

              <div className="discover__profile-card__gallery__rowtwo__post">
                <img
                  className="discover__profile-card__gallery__rowtwo__post-image"
                  src={images}
                  alt="images"
                />
                <p className="discover__profile-card__gallery__rowtwo__post-description">
                  looking for
                </p>
              </div>
            </div>
            <div className="discover__profile-card__gallery__rowtwo">
              <div className="discover__profile-card__gallery__rowtwo__profile">
                <img
                  className="discover__profile-card__gallery__rowtwo__profile__image"
                  src={profileimage}
                  alt="profileimage"
                />
                <h3 className="discover__profile-card__gallery__rowtwo__profile__name">
                  Beautifuldestinations
                </h3>
                <p className="discover__profile-card__gallery__rowtwo__profile__followers">
                  145k followers
                </p>
                <img
                  className="discover__profile-card__gallery__rowtwo__profile__instagram"
                  src={connect}
                  alt="iglogo"
                />
              </div>

              <div className="discover__profile-card__gallery__rowtwo__post">
                <img
                  className="discover__profile-card__gallery__rowtwo__post-image"
                  src={images}
                  alt="images"
                />
                <p className="discover__profile-card__gallery__rowtwo__post-description">
                  looking for
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DiscoverBrands;
