import { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import BackToTop from "./components/BackToTop";
import Token from "./components/Token";
import Home from "./components/Home";
import AOS from "aos";
import "aos/dist/aos.css";
function App() {
  useEffect(() => {
    AOS.init();
  }, []);

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
