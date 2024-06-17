import SokchoBadaDotum from "../../assets/fonts/SokchoBadaDotum.woff";
import GmarketSansLight from "../../assets/fonts/GmarketSansTTFLight.woff";
import GmarketSansMedium from "../../assets/fonts/GmarketSansTTFMedium.woff";
import GmarketSansBold from "../../assets/fonts/GmarketSansTTFBold.woff";
import { createGlobalStyle } from "styled-components";

import Mplus1 from "../../assets/fonts/mplus/MPLUS1p-Thin.woff";
import Mplus2 from "../../assets/fonts/mplus/MPLUS1p-Light.woff";
import Mplus3 from "../../assets/fonts/mplus/MPLUS1p-Regular.woff";
import Mplus4 from "../../assets/fonts/mplus/MPLUS1p-Medium.woff";
import Mplus5 from "../../assets/fonts/mplus/MPLUS1p-Black.woff";

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

    @font-face {
    font-family: 'Mplus';
    src: url(${Mplus1}) format('woff');
    font-weight: 100;
    font-style: normal;
  }
  @font-face {
    font-family: 'Mplus';
    src: url(${Mplus2}) format('woff');
    font-weight: 300;
    font-style: normal;
  }
  @font-face {
    font-family: 'Mplus';
    src: url(${Mplus3}) format('woff');
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: 'Mplus';
    src: url(${Mplus4}) format('woff');
    font-weight: 600;
    font-style: normal;
  }
  @font-face {
    font-family: 'Mplus';
    src: url(${Mplus5}) format('woff');
    font-weight: 700;
    font-style: normal;
  }
  }

`;
