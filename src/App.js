import { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import BackToTop from "./components/BackToTop";
import AOS from "aos";
import "aos/dist/aos.css";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import TokensPage from "./pages/TokensPage";
function App() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <>
      <BackToTop />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/tokens" element={<TokensPage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
