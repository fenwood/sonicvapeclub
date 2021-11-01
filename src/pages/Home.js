import React from "react";
// import { Link } from "react-router-dom";
import BannerImage from "../assets/suk_hero_snow.gif";
// import BannerImage from "../assets/suk_hero_road_rain_reduced.gif";
// import BannerImage from "../assets/suk_hero_kurd_reduced.gif";
import carousel1 from "../assets/carousel/1.jpg";
import carousel2 from "../assets/carousel/2.jpg";
import carousel3 from "../assets/carousel/3.jpg";
import carousel4 from "../assets/carousel/4.jpg";
import carousel5 from "../assets/carousel/5.jpg";
import carousel6 from "../assets/carousel/6.jpg";
import carousel7 from "../assets/carousel/7.jpg";
import carousel8 from "../assets/carousel/8.jpg";
import carousel9 from "../assets/carousel/9.jpg";
import carousel10 from "../assets/carousel/10.jpg";
import carousel11 from "../assets/carousel/11.jpg";
import carousel12 from "../assets/carousel/12.jpg";
import carousel13 from "../assets/carousel/13.jpg";
import carousel14 from "../assets/carousel/14.jpg";
import carousel15 from "../assets/carousel/15.jpg";
import carousel16 from "../assets/carousel/16.jpg";
import carousel17 from "../assets/carousel/17.jpg";
import carousel18 from "../assets/carousel/18.jpg";
import carousel19 from "../assets/carousel/19.jpg";
import carousel20 from "../assets/carousel/20.jpg";

import attrImgChar from "../assets/svc_attributes_character.png";
import attrImgHand from "../assets/svc_attributes_hand.png";
import attrImgTattoo from "../assets/svc_attributes_tattoos.png";
import attrImgHat from "../assets/svc_attributes_hat.png";
import attrImgEye from "../assets/svc_attributes_eyes.png";
import attrImgTeeth from "../assets/svc_attributes_teeth.png";
import attrImgVape from "../assets/svc_attributes_accessory.png";
import attrImgBg from "../assets/svc_attributes_bg.png";

import "../styles/Home.css";

// import CountDownTimer from "../components/CountDownTimer";

function Home() {
  var presentDate = new Date();
  var launchDate = new Date("2021/11/1 19:00:00");

  const hRedStyle = { color: "red" };
  const hBlueStyle = { color: "blue" };
  const hWhiteStyle = { color: "white" };
  const hYellowStyle = { color: "yellow" };
  //  const hBlackStyle = { color: "black" };

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

  document.title = "Sonic Vape Club | Home";

  return (
    <div className="overallContainer">
      <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
        <div className="headerContainer">
          <h1>
            <span style={hWhiteStyle}>The </span>
            <span style={hRedStyle}>Stick</span>{" "}
            <span style={hYellowStyle}>Up </span>{" "}
            <span style={hBlueStyle}>Kids</span>{" "}
          </h1>
          <h2 style={hWhiteStyle}>NFT Collection</h2>
          <h2 style={hBlueStyle}>The grimiest NFT collection on the chain</h2>
          <h2 style={hWhiteStyle}>Presale begins in {strDate}</h2>
          <a href="/contact" rel="noreferrer">
            <button>Join Whitelist</button>
          </a>
        </div>
      </div>

      <div className="scorecardContainer" align="center">
        <div className="cardList">
          <div className="cardItem-blue">
            <h2>10,000 </h2>
            <h3>Unique NFTs </h3>
            <h4>Randomly Assigned</h4>
          </div>
          <div className="cardItem-aqua">
            <h2>.01 ETH</h2>
            <h3>Presale</h3>
            <h4>Whitelist Only</h4>
          </div>
          <div className="cardItem-pink">
            <h2>.025 ETH</h2>
            <h3>Earlybird</h3>
            <h4>First 1,000 mints</h4>
          </div>
          <div className="cardItem-purple">
            <h2>.045 ETH</h2>
            <h3>Final Price</h3>
            <h4>Tokens 1000+</h4>
          </div>
        </div>
      </div>

      <div className="bottomContainer">
        <div className="marquee-wrapper">
          <div className="marquee">
            <img src={carousel1} alt="Stick Up Kids #1" />
            <img src={carousel2} alt="Stick Up Kids #2" />
            <img src={carousel3} alt="Stick Up Kids #3" />
            <img src={carousel4} alt="Stick Up Kids #4" />
            <img src={carousel5} alt="Stick Up Kids #5" />
            <img src={carousel6} alt="Stick Up Kids #6" />
            <img src={carousel7} alt="Stick Up Kids #7" />
            <img src={carousel8} alt="Stick Up Kids #8" />
            <img src={carousel9} alt="Stick Up Kids #9" />
            <img src={carousel10} alt="Stick Up Kids #10" />
            <img src={carousel11} alt="Stick Up Kids #11" />
            <img src={carousel12} alt="Stick Up Kids #12" />
            <img src={carousel13} alt="Stick Up Kids #13" />
            <img src={carousel14} alt="Stick Up Kids #14" />
            <img src={carousel15} alt="Stick Up Kids #15" />
            <img src={carousel16} alt="Stick Up Kids #16" />
            <img src={carousel17} alt="Stick Up Kids #17" />
            <img src={carousel18} alt="Stick Up Kids #18" />
            <img src={carousel19} alt="Stick Up Kids #19" />
            <img src={carousel20} alt="Stick Up Kids #20" />
          </div>
        </div>
      </div>

      <div className="attributes">
        <div className="leftSide text-center">
          <h1 style={hBlueStyle}>Every NFT is Unique</h1>
          <p align="left">
            Each Stick Up Kid was hand drawn with love and digitally created
            using machine learning to generate the unique images. These avatars
            will be offered as ERC-721 Tokens on the Ethereum blockchain. Every
            one of these lovable petty criminals is unique and token holders
            will be granted access to the Sonic Vape Club's New Amsterdam
            metaverse when available.
          </p>
        </div>
        <div className="rightSide">
          <div className="design-box">
            <table className="table table-bordered">
              <tbody>
                <tr>
                  <td>
                    <div className="img-box">
                      <img src={attrImgChar} alt="character type " />
                    </div>
                    <div className="text-box">
                      5 <br /> Character <br /> Types
                    </div>
                  </td>
                  <td>
                    <div className="img-box">
                      <img src={attrImgBg} alt="background type " />
                    </div>
                    <div className="text-box">
                      12 <br /> Background <br /> Colors
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="img-box">
                      <img src={attrImgHand} alt="hand item type " />
                    </div>
                    <div className="text-box">
                      8 <br /> Hand Items
                    </div>
                  </td>
                  <td>
                    <div className="img-box">
                      <img src={attrImgTeeth} alt="teeth type " />
                    </div>
                    <div className="text-box">
                      9 <br /> Teeth <br /> Types
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="img-box">
                      <img src={attrImgTattoo} alt="tattoos type " />
                    </div>
                    <div className="text-box">
                      5 <br /> Tattoos
                    </div>
                  </td>
                  <td>
                    <div className="img-box">
                      <img src={attrImgEye} alt="eyes type " />
                    </div>
                    <div className="text-box">
                      9 <br /> Eyes
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="img-box">
                      <img src={attrImgHat} alt="hat type " />
                    </div>
                    <div className="text-box">
                      12 <br /> Hats
                    </div>
                  </td>
                  <td>
                    <div className="img-box">
                      <img src={attrImgVape} alt="accessory type " />
                    </div>
                    <div className="text-box">
                      7 <br /> Accessories
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
