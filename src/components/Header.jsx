import React, { useState } from "react";
import logo from "../assets/img/svg/logo.svg";
import { Link } from "react-router-dom";

function Header(props) {
  const [navShow, setNavShow] = useState(false);
  if (navShow) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "initial";
  }
  return (
    <section id="header" className="w-100 nav_bg_gradient position-relative">
      <div className="layer__BottomRIght position-absolute"></div>
      <nav
        data-aos="fade-down"
        data-aos-offset="0"
        data-aos-duration="1000"
        data-aos-delay="2500"
        className="shadow_nav z_index2 position-relative"
      >
        <div className="container">
          <div className="d-flex justify-content-between align-items-center py-1">
            <Link to="/">
              <img className="logo_size" src={logo} alt="LOGO-ICON" />
            </Link>
            <div
              className={
                navShow
                  ? "threeline d-lg-none cursor_pointer "
                  : "threeline d-lg-none cursor_pointer "
              }
              onClick={() => setNavShow(!navShow)}
            >
              <div
                className={navShow ? " falseline1" : "  threelinechild"}
              ></div>
              <div className={navShow ? "falseline" : " threelinechild"}></div>
              <div className={navShow ? "falseline3 " : "threelinechild"}></div>
            </div>
            <ul className="mb-0 p-0 d-flex gap-xl-5 gap-4 d-none d-lg-flex">
              <li
                style={{ letterSpacing: "0.23em", cursor: "pointer" }}
                className="ms-lg-3 ff_futura fw-normal fs_sm text_light_white transition300 hover_effact_link opacity_07 text-uppercase"
              >
                Marketplace
              </li>
              <li className="ms-lg-3">
                <Link
                  style={{ letterSpacing: "0.23em" }}
                  to="/About"
                  className="ff_futura fw-normal fs_sm text_light_white transition300 hover_effact_link opacity_07 text-uppercase"
                >
                  About
                </Link>
              </li>
              <li
                style={{ letterSpacing: "0.23em", cursor: "pointer" }}
                className="ms-lg-3 f_futura fw-normal fs_sm text_light_white transition300 hover_effact_link opacity_07 text-uppercase"
              >
                NexChat
              </li>
              <li className="ms-lg-3">
                <Link
                  style={{ letterSpacing: "0.23em" }}
                  to="/Tokens"
                  className="ff_futura fw-normal fs_sm text_light_white transition300 hover_effact_link opacity_07 text-uppercase"
                >
                  Tokens
                </Link>
              </li>
            </ul>
            <ul className="d-flex gap-1 mb-0 p-0 mb-0 d-none d-lg-flex">
              <button className="btn_main border-0 ff_futura fw-semibold">
                get started
              </button>
            </ul>
          </div>
          <div
            className={
              navShow
                ? "shownav d-flex flex-column justify-content-center align-items-center"
                : "hidenav d-flex flex-column justify-content-center align-items-center"
            }
          >
            <ul className="mb-0 p-0 d-flex gap-4 flex-column justify-content-center align-items-center">
              <li
                onClick={() => setNavShow(!navShow)}
                style={{ letterSpacing: "0.23em" }}
                className="ms-lg-4 ff_futura fw-normal fs_sm text_light_white transition300 hover_effact_link text-uppercase"
              >
                Marketplace
              </li>
              <li className="ms-lg-4">
                <Link
                  onClick={() => setNavShow(!navShow)}
                  style={{ letterSpacing: "0.23em" }}
                  to="/About"
                  className="ff_futura fw-normal fs_sm text_light_white transition300 hover_effact_link text-uppercase"
                >
                  About
                </Link>
              </li>
              <li
                onClick={() => setNavShow(!navShow)}
                style={{ letterSpacing: "0.23em" }}
                className="ms-lg-4 ff_futura fw-normal fs_sm text_light_white transition300 hover_effact_link text-uppercase"
              >
                NexChat
              </li>
              <li className="ms-lg-4">
                <Link
                  onClick={() => setNavShow(!navShow)}
                  style={{ letterSpacing: "0.23em" }}
                  to="/Tokens"
                  className="ff_futura fw-normal fs_sm text_light_white transition300 hover_effact_link text-uppercase"
                >
                  Tokens
                </Link>
              </li>
            </ul>
            <ul className="d-flex gap-1 mb-0 p-0 mb-0 justify-content-center align-items-center mt-4">
              <button className="btn_main border-0 ff_futura fw-semibold">
                get started
              </button>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
}

export default Header;
