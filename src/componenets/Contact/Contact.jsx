import react from "react";
import "./Contact.scss";
import logo from "../../assets/images/Creativehub.png";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="contact">
      <Link to="/">
        <img className="contact__logo" src={logo} alt="logo" />
      </Link>

      <div className="contact__card">
        <h1 className="contact__card__title">Contact Us</h1>
        <p className="contact__card__subtitle">
          We are here to help you with any questions you may have. Please feel
          free to reach out to us and we will get back to you as soon as
          possible.
        </p>
        <div className="contact__card__contact__info">
          <p className="contact__card__contact__info__title">Email</p>
          <p className="contact__card__contact__info__subtitle">
            moaltumi@gmail.com
          </p>
        </div>
        <div className="contact__card__contact__info">
          <p className="contact__card__contact__info__title">Phone</p>
          <p className="contact__card__contact__info__subtitle">778-838-1730</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
