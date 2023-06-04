import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import "./hero.css";
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

function App() {
  return (
    <>
      <div className=" overflow-hidden">
        <div className=" min_vh_100 d-flex flex-column">
          <div className=" position-relative z_index8">
            {" "}
            <Header />
          </div>
          <div className=" d-flex flex-grow-1 justify-content-center">
            <Hero />
          </div>
        </div>
        <Assistant />
        <UniqueFeatures />
        <BlockchainTechnology />
        <WeDoes />
        <Lights />
        <TokanUtility />
        <GetStarted />
        <Footer />
      </div>
    </>
  );
}

export default App;
