import React from "react";
import "./Footer.scss";
import logo from "../../assets/images/Creativehub.png";
import instagram from "../../assets/images/Instagram_black.png";
import facebook from "../../assets/images/Facebook_black.png";
import twitter from "../../assets/images/Twitter_black.png";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer__row__one">
          <img className="footer__row__one__logo" src={logo}></img>
        </div>

        <div className="footer__row__two">
          <img className="footer__row__two__logo__social" src={instagram}></img>
          <img className="footer__row__two__logo__social" src={facebook}></img>
          <img className="footer__row__two__logo__social" src={twitter}></img>
        </div>
      </div>

      <div className="footer__row__three">
        <p className="footer__row__three__text">
          © 2024 CreativeHub. All rights reserved.
        </p>
      </div>
    </>
  );
};
export default Footer;
