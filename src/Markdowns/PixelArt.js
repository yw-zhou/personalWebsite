import React from "react";
import pika from "../Pictures/pixelArtDraw.PNG";
import load from "../Pictures/pixelArtLoad.PNG";

export default function PixelArt(width) {
  return (
    <div>
      <div
        className={`flexContainer pixelArt flexCenter ${
          width > 960 ? "" : "flexWrap"
        }`}
      >
        <div className="sideWidth">
          <h1>Pixel Art</h1>
          <p>
            Created using the pygame library in python, with lots of supporting
            features Including
          </p>
          <ul>
            <li>Selection of color from a color wheel</li>
            <li>A Recursive alogorithm for the fill tool</li>
            <li>Stack datastructure for the undo tool</li>
          </ul>
        </div>
        <img src={pika} alt="pixelArt" />
      </div>
      <div
        className={`flexContainer pixelArt flexCenter ${
          width > 960 ? "" : "flexWrap"
        }`}
      >
        <img src={load} alt="pixelArt" />
        <div className="sideWidth">
          <p>
            Users can also save their images as well as load and re-edit past
            drawings!
          </p>
        </div>
      </div>
    </div>
  );
}
