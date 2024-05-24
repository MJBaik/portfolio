import SokchoBadaDotum from "../../assets/fonts/SokchoBadaDotum.woff";
import GmarketSansLight from "../../assets/fonts/GmarketSansTTFLight.woff";
import GmarketSansMedium from "../../assets/fonts/GmarketSansTTFMedium.woff";
import GmarketSansBold from "../../assets/fonts/GmarketSansTTFBold.woff";
import { createGlobalStyle } from "styled-components";

export const Fonts = createGlobalStyle`
  :root {
    @font-face {
      font-family: 'GmarketSans';
      src: url(${GmarketSansLight});
      font-weight: 300;
      font-style: normal;
      font-display: swap;
    }

    @font-face {
      font-family: 'GmarketSans';
      src: url(${GmarketSansMedium});
      font-weight: 500;
      font-style: normal;
      font-display: swap;
    }

    @font-face {
      font-family: 'GmarketSans';
      src: url(${GmarketSansBold});
      font-weight: 700;
      font-style: normal;
      font-display: swap;
    }

    @font-face {
      font-family: 'SokchoBadaDotum';
      src: url(${SokchoBadaDotum});
      font-weight: 900;
      font-style: normal;
      font-display: swap;
    }
  }

`;
