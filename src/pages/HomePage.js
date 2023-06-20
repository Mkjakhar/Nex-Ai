import React, { useEffect } from "react";
import LoaderHome from "../components/LoaderHome";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Assistant from "../components/Assistant";
import UniqueFeatures from "../components/UniqueFeatures";
import BlockchainTechnology from "../components/BlockchainTechnology";
import WeDoes from "../components/WeDoes";
import Lights from "../components/Lights";
import TokanUtility from "../components/TokanUtility";
import Algorithum from "../components/Algorithum";
import GetStarted from "../components/GetStarted";
import Footer from "../components/Footer";
const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <LoaderHome />
      <div className="overflow-hidden">
        <div className="min_vh_100 d-flex flex-column">
          <div className="position-relative z_index8">
            <Header />
          </div>
          <div className="d-flex flex-grow-1 justify-content-center">
            <Hero />
          </div>
        </div>
        <Assistant />
        <UniqueFeatures />
        <BlockchainTechnology />
        <WeDoes />
        <Lights />
        <TokanUtility />
        <Algorithum />
        <GetStarted />
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
