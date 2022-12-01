import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import HireRemoteDevelopers from "./components/HireRemoteDevelopers";
import ErrorPage from "./components/ErrorPage";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header/Header";
import { GlobalStyle } from "./GlobalStyle";
import Services from "./components/Services";
import Career from "./components/Career";
import Portfolio from "./components/Portfolio";
import HireUs from "./components/HireUs";
import Footer from "./components/Footer";

function App() {
  const theme = {
    colors: {
      heading: "#231740",
      text: "#fff",
      bg: "#101434",
      helper:" #FBAB1F ",
      color_white:"#fff",
      component_bg:"#2C4385",
      fontSize: "2rem",
      shadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);",
    },
    fontsize:{
      fontSize: "2rem",
    },
    media: {
      mobile: "768px",
      tab: "998px",
      small_phone:"612px"
    },
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <GlobalStyle />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/hireremotedevelopers" element={<HireRemoteDevelopers />} />
            <Route path="/services" element={<Services />} />
            <Route path="/career" element={<Career />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/hire" element={<HireUs />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
          <Footer/>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
