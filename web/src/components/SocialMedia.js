import React from "react";
import BE from "./icon/BEIcon";
import IG from "./icon/IGIcon";
import ELLO from "./icon/ELLOIcon";
import LI from "./icon/LIIcon";

const SocialMedia = () => {
  return (
    <div className="flex justify-between w-60 pt-12">
      <a
        href="https://www.linkedin.com/in/jesus-monge-abab66a/"
        target="_blank"
        rel="noreferrer"
      >
        <LI />
      </a>
      <a
        href="https://www.instagram.com/zeroanima/"
        target="_blank"
        rel="noreferrer"
      >
        <IG />
      </a>
      <a
        href="https://www.behance.net/zeroanima"
        target="_blank"
        rel="noreferrer"
      >
        <BE />
      </a>
      <a href="https://ello.co/zeroanima" target="_blank" rel="noreferrer">
        <ELLO />
      </a>
    </div>
  );
};

export default SocialMedia;
