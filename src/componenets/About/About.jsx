import React from "react";
import "./About.scss";
import logo from "../../assets/images/Creativehub.png";
import team from "../../assets/images/_0007_Mohamed_Altumi_1010.jpg";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="about">
      <Link to="/">
        <img className="about__logo" src={logo} alt="logo" />
      </Link>

      <div className="about__card">
        <h1 className="about__card__title">About Us</h1>
        <p className="about__card__subtitle">
          Within the vast landscape of influencer marketing, CreativeHub
          streamlines the intricate process of discovering the perfect
          influencers for your brand. Our platform houses a comprehensive and
          thoughtfully curated database that spans various niches and
          industries. Whether your focus is on a particular demographic,
          geographic location, or niche market, our user-friendly search and
          filter features empower you to precisely identify influencers who
          seamlessly align with your brand ethos.
        </p>

        <div className="about__card__back__content">
          <img
            className="about__card__back__content__team"
            src={team}
            alt="team"
          />
          <h1 className="about__card__back__content__title">Our Team</h1>
          <p className="about__card__back__content__subtitle">
            My name is Mohamed Altumi, I am the founder and developer of
            CreativeHub and I am passionate about creating a platform that
            simplifies the process of influencer marketing. I am dedicated to
            providing a user-friendly and efficient platform that connects
            brands with influencers who are the perfect fit. I am committed to
            revolutionizing the way brands and influencers connect, making
            influencer marketing accessible to brands of all sizes and
            industries.
          </p>
        </div>
        <div className="about__card__back__content__second">
          <h1 className="about__card__back__content__second__title">
            Our Mission
          </h1>
          <p className="about__card__back__content__second__subtitle">
            At CreativeHub, our mission is to revolutionize the landscape of
            brand and influencer partnerships. We envision a future where these
            connections transcend traditional collaborations, evolving into
            transformative alliances that resonate authentically with the shared
            audience. By harnessing the power of technology and innovation, we
            strive to redefine how brands and influencers engage, creating
            impactful and lasting relationships.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
