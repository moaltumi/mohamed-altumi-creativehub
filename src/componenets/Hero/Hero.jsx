import React from "react";
import "./Hero.scss";

const Hero = () => {
  return (
    <div className="hero">
      <h2 className="hero__heading">
        Effortless Colaborations in Three Simple Steps
      </h2>
      <ul className="hero__list">
        <li className="hero__list__item">
          <img className="hero__list__item__image" src="{hero1}" alt="hero1" />
          <h3 className="hero__list__item__heading">Find influencers</h3>
          <p className="hero__list__item__text">
            Browse our extensive database of influencers spanning various
            niches. Filter by audience demographics, engagement rates, and more
            to find the perfect match for your brand.
          </p>
        </li>
        <li className="hero__list__item">
          <img className="hero__list__item__image" src="{hero2}" alt="hero2" />
          <h3 className="hero__list__item__heading">Transparent Pricing</h3>
          <p className="hero__list__item__text">
            Influencers list their prices for promotional services, making it
            easy for you to find the right fit within your budget. No
            negotiation needed –just choose the influencers that align with your
            brand and budget.
          </p>
        </li>
        <li className="hero__list__item">
          <img className="hero__list__item__image" src="{hero3}" alt="hero3" />
          <h3 className="hero__list__item__heading">Boost Your Brand</h3>
          <p className="hero__list__item__text">
            Watch your product gain visibility as influencers share it with
            their engaged audience. Track performance metrics, measure ROI, and
            refine your strategy for even greater impact.
          </p>
        </li>
      </ul>


      <div className="main">

    <div className="main__col__one">
    <h1 className="main__col__one__title">Ready to Elevate Your Brand?</h1>
    <p className="main__col__one__subtitle">Sign up today and start connecting with influencers to amplify your online presence.</p>
    <button className="main__col__one__button">Sign Up Now</button>
    </div>


    <div className="main__col__two">
        <img className="main__col__two__image" src="{headerimg}" alt="influencer" />
        </div>
    </div>
    </div>
  );
};
export default Hero;
