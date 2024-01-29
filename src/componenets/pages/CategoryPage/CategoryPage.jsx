import React from "react";
import Select from "react-select";
import "./CategoryPage.scss";
import logo from "../../../assets/images/Creativehub.png";
import { Link } from "react-router-dom";

function CategoryPage() {
  return (
    <>
      <div>
        <Link to="/">
          <img className="logo" src={logo} alt="logo" />
        </Link>
      </div>

      <div className="details">
        <div className="details__category">
          <h1 className="details__category__title">Category</h1>
          <p className="details__category__subtitle">
            Choose the perfect category which represent you better
          </p>
          <Select id="categories" name="categories">
            <option value="technology">Fitness and Wellness</option>
            <option value="fashion">Fashion and Beauty</option>
            <option value="sports">Travel and Adventure</option>
            <option value="food">Food and Cooking</option>
            <option value="music">Music and Entertainment</option>
            <option value="art">Art and Photography</option>
            <option value="lifestyle">Lifestyle and Home</option>
            <option value="business">Business and Entrepreneurship</option>
          </Select>
        </div>

        <div className="details__influncer__followers">
          <h1 className="details__influncer__followers__title">Followers</h1>
          <p className="details__influncer__followers__subtitle">
            pick the number of followers you have on Instagram
          </p>
          <select id="influncer" name="influncer">
            <option value="number">1-1000</option>
            <option value="number">1000-10000</option>
            <option value="number">10000-100000</option>
            <option value="number">100000-1000000</option>
          </select>
        </div>

        <div className="details__influncer__cost">
          <h1 className="details__influncer__cost__title">Price</h1>
          <p className="details__influncer__cost__subtitle">
            Set A Minmum Price for your collabration with brands
          </p>
          <select id="influncer" name="influncer">
            <option value="number"> $0 - $100</option>
            <option value="number">$100 - $200</option>
            <option value="number">$200-$500</option>
            <option value="number">$500-$1000</option>
          </select>
        </div>

        <Link to="/Onboarding/feeds" className="details__button__container">
          <button className="details__button__container__next">Next</button>
        </Link>
      </div>

      {/* 
   

      */}
    </>
  );
}

export default CategoryPage;
