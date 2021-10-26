import React from "react";
import { FaMedium, FaEnvelope, FaTwitter, FaGithub } from "react-icons/fa";

import styles from "./socialLinksStyles.module.css";

const SocialLinks = () => {
  return (
    <div className={styles.socialLinks}>
      <ul>
        <li>
          <a href="mailto:sonifvapeclub@outlook.com">
            <FaEnvelope />
          </a>
        </li>
        <li>
          <a href="https://github.com/propr1">
            <FaGithub />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/sonicvapeclub">
            <FaTwitter />
          </a>
        </li>
        <li>
          <a href="https://medium.com/@amanhimself">
            <FaMedium />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialLinks;
