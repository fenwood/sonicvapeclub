import React from "react";
import { ReactComponent as OpenSeaIcon } from "../assets/opensea-logo.svg";
import { ReactComponent as TwitterIcon } from "../assets/twitter-logo-white.svg";
import { ReactComponent as DiscordIcon } from "../assets/discord-logo.svg";

import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://opensea.io/stickupkids">
          <OpenSeaIcon height="40px" width="40px" />
        </a>{" "}
        <a href="https://twitter.com/sonicvapeclub">
          <TwitterIcon height="40px" width="40px" />
        </a>{" "}
        <a href="https://discord.gg/WtzBaWbyd4">
          <DiscordIcon height="40px" width="40px" />
        </a>
      </div>
      <p>
        {" "}
        &copy; 2021 sonicvapeclub.com |{" "}
        <a href="https://polygonscan.com/address/0x3469791488094946D6aAd4497A12245e036D6A87">Polygonscan Contract</a>
      </p>
    </div>
  );
}

export default Footer;
