import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/Creativehub.png";

const Feeds = () => {
  const [feedData, setFeedData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://v1.nocodeapi.com/moaltumi/instagram/LjiPFPDYOXVoZBBQ"
      );
      setFeedData(response.data.data); // Assuming the response contains an array of feed data
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); // The empty dependency array ensures the effect runs once when the component mounts

  return (
    <>
      <Link to="/">
        <img className="logo" src={logo} alt="logo" />
      </Link>

      <div className="Profile__details">
        <p className="Profile__details__name">name</p>
        <img className="Profile__details__image" src="" alt="profileimage" />
        <p className="Profile__details__username">username</p>
        <p className="Profile__details__location">location</p>
        <p className="Profile__details__email">email</p>
        <p className="Profile__details__phone">number</p>
      </div>

      <div className="container">
        {feedData.map((feed) => (
          <div className="card" key={feed.id}>
            <img src={feed.media_url} alt={feed.caption} />
            <p>{feed.caption}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Feeds;
