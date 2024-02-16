import "./Contact.scss";
import logo from "../../assets/images/Creativehub.png";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";

const Contact = () => {
  return (
    <>
      <div className="contact">
        <nav className="contact__navbar">
          <Link to="/">
            <img className="contact__navbar__logo" src={logo} alt="logo" />
          </Link>

          <ul className="contact__navbar__menu">
            <li className="contact__navbar__item">
              <Link to="/" className="contact__navbar__link">
                Home
              </Link>
            </li>
            <li className="contact__navbar__item">
              <Link to="/about " className="contact__navbar__link">
                About
              </Link>
            </li>
            <li className="contact__navbar__item">
              <Link to="/Contact" className="contact__navbar__link-active">
                Contact
              </Link>
            </li>
          </ul>
          <Link className="contact__navbar__link" to="/Onboarding">
            <button className="contact__navbar__button">Get Started</button>
          </Link>
        </nav>

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
            <p className="contact__card__contact__info__subtitle">
              778-838-1730
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
