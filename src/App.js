import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import BackToTop from "./components/BackToTop";
import Token from "./components/Token";
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
