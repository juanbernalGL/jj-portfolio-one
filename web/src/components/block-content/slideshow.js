import React, { useState } from "react";
import { buildImageObj } from "../../lib/helpers";
import { imageUrlFor } from "../../lib/image-url";

import "./slideshow.module.css";

function Slideshow(props) {
  if (!props.slides) return null;
  return (
    <div>
      <div className=" py-12">
        <div className="grid grid-cols-3 gap-4">
          {props.slides.map((slide) => (
            <div key={slide._key} className="slide">
              {slide.asset && (
                <img
                  src={imageUrlFor(buildImageObj(slide))
                    .width(200)
                    .fit("crop")
                    .url()}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Slideshow;
