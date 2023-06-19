import React, { useEffect } from "react";
import LoaderHome from "./LoaderHome";
import Header from "./Header";
import Hero from "./Hero";
import Assistant from "./Assistant";
import UniqueFeatures from "./UniqueFeatures";
import BlockchainTechnology from "./BlockchainTechnology";
import WeDoes from "./WeDoes";
import Lights from "./Lights";
import TokanUtility from "./TokanUtility";
import Algorithum from "./Algorithum";
import GetStarted from "./GetStarted";
import Footer from "./Footer";
const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
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
    </div>
  );
};

export default Home;
