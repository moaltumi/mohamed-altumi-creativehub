import React from "react";
import "./Main.scss";
import main1 from "../../assets/images/main-image1.png";
import main2 from "../../assets/images/main-image2.png";
import main3 from "../../assets/images/main-image3.png";
import headerimg from "../../assets/images/second-main-hero.png";



const Main = () => {
  return (
    <div className="main">
      <h2 className="main__heading">
        Effortless Colaborations in Three Simple Steps
      </h2>


      <ul className="main__list">
        <li className="main__list__item">
          <img src={main1} className="main__list__item__image" alt="main1" />
          <h3 className="main__list__item__heading">Find influencers</h3>
          <p className="main__list__item__text">
            Browse our extensive database of influencers spanning various
            niches. Filter by audience demographics, engagement rates, and more
            to find the perfect match for your brand.
          </p>
        </li>
        <li className="main__list__item">
          <img  src={main2} className="main__list__item__image"  alt="main2" />
          <h3 className="main__list__item__heading">Transparent Pricing</h3>
          <p className="main__list__item__text">
            Influencers list their prices for promotional services, making it
            easy for you to find the right fit within your budget. No
            negotiation needed –just choose the influencers that align with your
            brand and budget.
          </p>
        </li>
        <li className="main__list__item">
          <img  src={main3} className="main__list__item__image"  alt="main3" />
          <h3 className="main__list__item__heading">Boost Your Brand</h3>
          <p className="main__list__item__text">
            Watch your product gain visibility as influencers share it with
            their engaged audience. Track performance metrics, measure ROI, and
            refine your strategy for even greater impact.
          </p>
        </li>
      </ul>


      <div className="second__main">

    <div className="second__main__col__one">
    <h1 className="second__main__col__one__title">Ready to Elevate Your Brand?</h1>
    <p className="second__main__col__one__subtitle">Sign up today and start connecting with influencers to amplify your online presence.</p>
    <button className="second__main__col__one__button">Sign Up Now</button>
    </div>


    <div className="second__main__col__two">
        <img className="second__main__col__two__image" src= {headerimg} alt="influencer" />
        </div>
    </div>
    </div>
  );
};
export default Main;

