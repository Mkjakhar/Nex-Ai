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

function App() {
  return (
    <>
      <div className=" overflow-hidden">
        {/* <Hero /> */}
        {/* <UniqueFeatures />
        <BlockchainTechnology /> */}
        <div className=" min_vh_100 d-flex flex-column">
          <Header />
          <div className=" d-flex flex-grow-1 justify-content-center">
            <Hero />
          </div>
        </div>

        {/* <Assistant />
        <WeDoes />
        <Lights />
        <Footer /> */}
      </div>
    </>
  );
}

export default App;
