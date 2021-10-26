import React from "react";
import Faq from "react-faq-component";
import "../styles/Faq.css";
import rightImage from "../assets/stickupkids_poster_grid.jpg";

const data = {
  title: "FAQ",
  rows: [
    {
      title: "What is the Stick Up Kids Project?",
      content: `The Stick Up Kids are set of 10,000 unique, randomly generated avatars terrorizing the Ethereum blockchain as ERC-721 tokens. Brought to you by the Sonic Vape Club, the Stick Up Kids are the grimiest NFTs on the chain right now.`,
    },
    {
      title: "How many Stick Up Kids are there?",
      content:
        "There are five different Stick Up Kid characters. There are 2,000 NFTs of each character, with different traits and attributes.",
    },
    {
      title: "When are you launching?",
      content: `Our drop date is set for 2021-11-01. Follow us on Twitter for updates and giveaway opportunities. `,
    },
    {
      title: "How can I aquire a Stick Up Kid?",
      content: `Stick Up Kids will be available for purchase on our website through an initial token offering. At the time of purchase, a randomly selected Stick Up Kid will be minted on the Ethereum block chain and delivered directly to your wallet. You will need a wallet such as metamask with some eth to make the purchase.`,
    },
    {
      title: "How were they created?",
      content:
        "Every illustration was hand then digitally drawn and the random layers were applied via machine learning",
    },
    {
      title: "What are the tokenomics?",
      content:
        "Presale 100 tokens @ .01 ETH, Earlybird 1000 tokens @ .025 ETH, Remaining tokens @ .045 ETH. Every 1000 mints a random Stick Up Kid hodler will be recieve 10% of initial sales. 10% of initial and 5% of secondary sales going to charity.",
    },
    {
      title: "How many are you giving away?",
      content:
        "We are reserving 100 Stick Up Kids, some for pre-sale promotion and others will be air dropped to active hodlers.",
    },
    {
      title: "How much does each Stick Up Kid cost?",
      content:
        "The firs 100 will be minted at .02 ETH, the next 400 at .03 and the remainder at .04.",
    },
    {
      title: "Will there be resale royalties?",
      content:
        "Yes, 5% royalties applied to all items. Most of this will go back into community development.",
    },
  ],
};

const styles = {
  // bgColor: 'white',
  titleTextColor: "black",
  rowTitleColor: "black",
  rowContentColor: "grey",
  arrowColor: "red",
};

const config = {
  // animate: true,
  // arrowIcon: "V",
  // tabFocus: true
};

function Faqs() {
  document.title = "Sonic Vape Club | FAQ";

  return (
    <div className="faq">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${rightImage})` }}
      ></div>

      <div className="rightSide">
        <Faq data={data} styles={styles} config={config} />
      </div>
    </div>
  );
}

export default Faqs;
