import React from "react";
import { Global, css } from "frontity";
import { SourceSansPro } from "../../fonts/SourceSansPro.ttf";

const FontFace = () => (
  <Global
    styles={css`
      @font-face {
        font-family: "SourceSansPro";
        src: url(${SourceSansPro}) format("ttf");
        font-weight: normal;
        font-style: normal;
        font-display: swap;
      }
    `}
  />
);

export default FontFace;