import React from "react";
import BE from "../assets/images/aquamarine/BE.png";
import IG from "../assets/images/aquamarine/IG.png";
import LI from "../assets/images/aquamarine/LI.png";
import ELLO from "../assets/images/aquamarine/Ello.png";

const SocialMedia = () => {
  return (
    <div className="flex justify-between w-60 pt-12">
      <a href="https://www.linkedin.com/in/jesus-monge-abab66a/">
        <img src={LI} alt="LI" />
      </a>
      <a href="https://www.instagram.com/zeroanima/">
        <img src={IG} alt="IG" />
      </a>
      <a href="https://www.behance.net/zeroanima">
        <img src={BE} alt="BE" />
      </a>
      <a href="https://ello.co/zeroanima">
        <img src={ELLO} alt="Ello" />
      </a>
    </div>
  );
};

export default SocialMedia;
