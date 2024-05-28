import { ThemeProvider } from "styled-components";
import { light } from "./styles/common/theme";
import { Global } from "./styles/common/global";
import { Fonts } from "./styles/common/fonts";
import Header from "./components/Header";
import Skills from "./components/Skills";

import Projects from "./components/Projects";
import Contact from "./components/Contact";
import HeaderPadding from "./components/HeaderPadding";
import Modal from "./components/Modal";

function App() {
  return (
    <ThemeProvider theme={light}>
      <Global />
      <Fonts />
      <Modal />
      <Header />
      <HeaderPadding />
      <Skills />
      <Projects />
      <Contact />
    </ThemeProvider>
  );
}

export default App;
