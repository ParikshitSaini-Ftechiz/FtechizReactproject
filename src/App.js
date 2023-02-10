import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import HireRemoteDevelopers from "./components/components/DropDown_Page/HireRemoteDevelopers";
import HireBlockchainDevelopers from "./components/components/DropDown_Page/HireBlockchainDevelopers";
import HireFullStackDevelopers from "./components/components/DropDown_Page/HireFullStackDevelopers";
import HireJavaDevelopers from "./components/components/DropDown_Page/HireJavaDevelopers";
import HireMobileAppDevelopers from "./components/components/DropDown_Page/HireMobileAppDevelopers";
import MobileAppDevelopment from "./components/components/DropDown2_Page/MobileAppDevelopment";
import AndroidAppDevelopment from "./components/components/DropDown2_Page/AndroidAppDevelopment";
import IOSAppDevelopment from "./components/components/DropDown2_Page/IOSAppDevelopment";
import FlutterAppDevelopment from "./components/components/DropDown2_Page/FlutterAppDevelopment";
import ReactNativeAppDevelopment from "./components/components/DropDown2_Page/ReactNativeAppDevelopment";
import WebsiteDevelopment from "./components/components/DropDown2_Page/WebsiteDevelopment";
import WebsiteDesigning from "./components/components/DropDown2_Page/WebsiteDesigning";
import WebApplicationDevelopment from "./components/components/DropDown2_Page/WebApplicationDevelopment";
import BlockChainDevelopment from "./components/components/DropDown2_Page/BlockChainDevelopment";
import CloudAppDevelopment from "./components/components/DropDown2_Page/CloudAppDevelopment";

import ErrorPage from "./components/ErrorPage";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header/Header";
import { GlobalStyle } from "./GlobalStyle";

import Career from "./components/Career";
import Portfolio from "./components/Portfolio";
import HireUs from "./components/HireUs";
import Footer from "./components/Footer";
import PrivacyPolicy from "./components/components/Footer_component/PrivacyPolicy";
import Disclaimer from "./components/components/Footer_component/Disclaimer";
import TermOfUse from "./components/components/Footer_component/TermOfUse";
import Scroll_Up from "./components/components/components/Scroll_Up/Scroll_Up";
import Contact from "./components/components/components/Contact";
import {
  Hire_SpringBoot_Dev_blockchain,
  Hire_SpringBoot_Dev_fullstack,
  Hire_SpringBoot_Dev_mobile,
  Hire_SpringBoot_Dev_remote,
  Hire_SpringBoot_Dev_java,
} from "./components/components/components/DropDown_components.js/Hire_SpringBoot_Dev";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const theme = {
    colors: {
      light_color: "#ebebed",
      heading: "#231740",
      text: "#fff",
      bg: "#101434",
      helper: " #FBAB1F ",
      color_white: "#fff",
      btn_color: "#0275d8",
      component_bg:
        " linear-gradient(90deg, rgba(25,28,63,1) 0%, rgba(19,21,47,1) 54%, rgba(23,23,23,1) 100%);",
      // "linear-gradient(90deg, rgba(23,23,23,1) 0%, rgba(19,21,47,1) 54%, rgba(25,28,63,1) 100%);",
      fontSize: "2rem",
      hover_color: "#0275d8",
      color_grey: "#f7f7f7",
      premiumClient_bg:
        "linear-gradient(90deg, rgba(35,23,64,1) 0%, rgba(58,38,105,1) 54%, rgba(91,61,167,1) 100%);",
      card_bg:
        "linear-gradient(90deg, rgba(2,82,150,1) 0%, rgba(2,103,190,1) 54%, rgba(2,117,216,1) 100%);",
      shadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
      dark_shadow:
        "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);",
      services_card_bg:
        " linear-gradient(0deg, rgba(1,83,156,1) 0%, rgba(2,59,108,1) 49%, rgba(1,43,78,1) 100%);",
    },
    fontsize: {
      fontSize: "2rem",
    },
    media: {
      mobile: "768px",
      tab: "998px",
      small_phone: "612px",
      extra_small: "400px",
    },
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <GlobalStyle />
          <ScrollToTop />
          <Header />
          <Scroll_Up />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />

            {/* drop down */}
            <Route
              path="/hireremotedevelopers"
              element={<HireRemoteDevelopers />}
            />
            <Route
              path="/hireblockchaindevelopers"
              element={<HireBlockchainDevelopers />}
            />
            <Route
              path="/hirefullstackdevelopers"
              element={<HireFullStackDevelopers />}
            />
            <Route
              path="/hirejavadevelopers"
              element={<HireJavaDevelopers />}
            />
            <Route
              path="/hiremobileappdevelopers"
              element={<HireMobileAppDevelopers />}
            />
            {/* drop down 2*/}
            <Route
              path="/mobileappdevelopment"
              element={<MobileAppDevelopment />}
            />
            <Route
              path="/androidappdevelopment"
              element={<AndroidAppDevelopment />}
            />
            <Route path="/iosappdevelopment" element={<IOSAppDevelopment />} />
            <Route
              path="/flutterappdevelopment"
              element={<FlutterAppDevelopment />}
            />
            <Route
              path="/reactnativeappdevelopment"
              element={<ReactNativeAppDevelopment />}
            />
            <Route
              path="/websitedevelopment"
              element={<WebsiteDevelopment />}
            />
            <Route path="/websitedesigning" element={<WebsiteDesigning />} />
            <Route
              path="/webapplicationdevelopment"
              element={<WebApplicationDevelopment />}
            />
            <Route
              path="/blockchaindevelopment"
              element={<BlockChainDevelopment />}
            />
            <Route
              path="/cloudappdevelopment"
              element={<CloudAppDevelopment />}
            />

            <Route path="/career" element={<Career />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/hire" element={<HireUs />} />
            <Route path="*" element={<ErrorPage />} />

            {/* footer_component */}
            <Route path="/disclaimer" element={<Disclaimer />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermOfUse />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/pricing" element={<Hire_SpringBoot_Dev_remote />} />
            <Route path="/pricing" element={<Hire_SpringBoot_Dev_mobile />} />
            <Route
              path="/pricing"
              element={<Hire_SpringBoot_Dev_fullstack />}
            />
            <Route
              path="/pricing"
              element={<Hire_SpringBoot_Dev_blockchain />}
            />
            <Route path="/pricing" element={<Hire_SpringBoot_Dev_java />} />
          </Routes>
          <Footer />
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
