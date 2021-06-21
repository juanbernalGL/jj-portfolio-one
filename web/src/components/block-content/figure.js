import React from "react";
import { buildImageObj } from "../../lib/helpers";
import { imageUrlFor } from "../../lib/image-url";

import { root, caption } from "./figure.module.css";

function Figure(props) {
  return (
    <figure className={root}>
      {props.asset && (
        <img
          src={imageUrlFor(buildImageObj(props)).width(1200).url()}
          alt={props.alt}
        />
      )}
      <figcaption className={caption}>{props.caption}</figcaption>
    </figure>
  );
}

export default Figure;
