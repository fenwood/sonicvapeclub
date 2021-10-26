import React from "react";
import topBanner from "../assets/svc_about_banner.jpg";
import "../styles/About.css";

function About() {
  document.title = "Sonic Vape Club | About Us";

  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${topBanner})` }}
      ></div>
      <div className="aboutBottom">
        <h1>About Us</h1>
        <p>
          The Sonic Vape Club is a collective of artists, designers and a
          developer working towards building great NFT projects. Our goal is to
          provide value to our token holders and give back to the community. For
          example, as a Stick Up Kids hodler you will have access to exclusive
          drops, merch and random ETH giveaways.{" "}
          <strong>
            We are giving 10% back to our token holders and 10% to charity
          </strong>
          .
        </p>
        <p>
          Our first project is a collection of degenerate, gwop-getting Stick Up
          Kid avatars. There is a saying back in the homeland: Don't have 100
          rubles, have 100 friends. The Stick Up Kids would rather take the
          rubles. Born in the Khrushchyovkas of Garage Valley, these grimy
          fatherless hoodlums grew up drinking hard liquor, sticking up dice
          games and squatting on the sidewalks menacing passerbys. The Stick Up
          Kids love money and you should too, as a Stick Up Kid token holder you
          get a change to earn ETH. Every 1,000 Stick Up Kid minted, we will
          distrubte to a random hodler 10% of the initial sale process. How
          sweet is that?
        </p>

        <p>
          Our long term vision is to develop the New Amsterdam Fight Club
          metaverse that owners of our NFTs will be granted acccess to. For more
          information check out our Twitter and Discord pages.
        </p>
      </div>
    </div>
  );
}

export default About;
