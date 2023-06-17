import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Hero from "./components/Hero";
import UniqueFeatures from "./components/UniqueFeatures";
import BlockchainTechnology from "./components/BlockchainTechnology";
import Assistant from "./components/Assistant";
import WeDoes from "./components/WeDoes";
import Lights from "./components/Lights";
import Footer from "./components/Footer";
import TokanUtility from "./components/TokanUtility";
import GetStarted from "./components/GetStarted";
import Algorithum from "./components/Algorithum";
import BackToTop from "./components/BackToTop";
import LoaderHome from "./components/LoaderHome";

import Token from "./components/Token";

import WhiteList from "../src/components/WhiteList";
import Community from "./components/Community";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <>
       <BackToTop />
     

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/tokens" element={<Token />}></Route>
      </Routes>
      
    </>
  );
}

export default App;
