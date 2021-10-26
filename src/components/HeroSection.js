import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/svc_home_header_2.jpg";
import ScorecardImage from "../assets/svc_home_scorecard.jpg";

import "../styles/HeroSection.css";

import CountDownTimer from "./CountDownTimer";

function HeroSection() {
  var presentDate = new Date();
  var launchDate = new Date("2021/11/1 19:00:00");
  var hours = Math.round(Math.abs(launchDate - presentDate) / 36e5);

  const hRedStyle = { color: "red" };
  const hBlueStyle = { color: "blue" };

  function timeDiffCalc(dateFuture, dateNow) {
    let diffInMilliSeconds = Math.abs(dateFuture - dateNow) / 1000;

    // calculate days
    const days = Math.floor(diffInMilliSeconds / 86400);
    diffInMilliSeconds -= days * 86400;
    console.log("calculated days", days);

    // calculate hours
    const hours = Math.floor(diffInMilliSeconds / 3600) % 24;
    diffInMilliSeconds -= hours * 3600;
    console.log("calculated hours", hours);

    // calculate minutes
    const minutes = Math.floor(diffInMilliSeconds / 60) % 60;
    diffInMilliSeconds -= minutes * 60;
    console.log("minutes", minutes);

    let difference = "";
    if (days > 0) {
      difference += days === 1 ? `${days} day, ` : `${days} days, `;
    }

    difference +=
      hours === 0 || hours === 1 ? `${hours} hour, ` : `${hours} hours, `;

    difference +=
      minutes === 0 || hours === 1
        ? `${minutes} minutes`
        : `${minutes} minutes`;

    return difference;
  }

  var strDate = timeDiffCalc(new Date(presentDate), new Date(launchDate));

  // the time difference is:
  // 1 day, 14 hours, 10 minutes
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1>Minting Soon</h1>
        <h2>10,000 unique avatars</h2>
        <h2 style={hBlueStyle}>100 available for presale @ .01 ETH*</h2>
        <h3 style={hRedStyle}>Presale begins in {strDate}</h3>
        <h6>* whitelist only - see Twitter or Discord</h6>
        <a href="https://stickupkidsnft.com" target="_blank">
          <button>Mint Now</button>
        </a>
      </div>
    </div>
  );
}

export default HeroSection;
