import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import BackToTop from "./components/BackToTop";
import Token from "./components/Token";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";

function App() {
  return (
    <>
      <BackToTop />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/tokens" element={<Token />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </>
  );
}

export default App;
