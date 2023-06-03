import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Hero from "./components/Hero";
import Assistant from "./components/Assistant";
import WeDoes from "./components/WeDoes";
import Lights from "./components/Lights";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="">
        {" "}
        <Hero />
        <Assistant />
        <WeDoes />
        <Lights />
        <Footer />
      </div>
    </>
  );
}

export default App;
