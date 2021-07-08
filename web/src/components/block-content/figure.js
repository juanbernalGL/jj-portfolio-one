import React from "react";
import { buildImageObj } from "../../lib/helpers";
import { imageUrlFor } from "../../lib/image-url";

import { root, caption } from "./figure.module.css";

function Figure(props) {
  return (
    <figure className="flex flex-wrap justify-center">
      {props.asset && (
        <img src={imageUrlFor(buildImageObj(props)).url()} alt={props.alt} />
      )}
      <figcaption className={caption}>{props.caption}</figcaption>
    </figure>
  );
}

export default Figure;
