import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
  :root {
    ${(props) => `
      --bg: ${props.theme.env.bgColor};
      --bg-modal: ${props.theme.env.bgModal};
      --text: ${props.theme.env.text};
      --text-sub: ${props.theme.env.textSub};
      --main: ${props.theme.color.main};
      --sub: ${props.theme.color.sub};
      --border: ${props.theme.color.border};
      --red: ${props.theme.color.red};
    `};

  }

  body, html {
      margin: 0;
      padding: 0;
      background-color: rgb(var(--bg));

      -webkit-user-select:none;
      -moz-user-select:none;
      -ms-user-select:none;
      user-select:none;
      scroll-behavior: smooth;
    }

    html, body, div, p, 
    h1, h2, h3, h4, h5, 
    span, header, footer, 
    section, article, main, nav {
      box-sizing: border-box;
      font-family: "GmarketSans";
      color: rgb(var(--text));
    }
`;
