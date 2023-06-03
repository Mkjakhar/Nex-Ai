import React from "react";
import headerImg from "../assets/img/webp/hero-img.webp";
import Header from "./Header";

function Hero() {
  return (
    <>
      <section
        id="hero"
        className="sec_bg_gradient position-relative min_vh_100 d-flex flex-column"
      >
        <Header />
        <div className="container d-flex flex-grow-1 align-items-center flex-column justify-content-center py-5">
          <div className="row">
            <div className="col-lg-6">
              <div className=" z_index1 position-relative">
                <h1 className=" ff_futura fw-normal fs_5x2l text_light_white text-capitalize mb-0">
                  Nexai is an advanced AI-powered home assistant
                </h1>
                <p className=" ff_futura fw-normal fs_md text_light_white mb-0 py-3">
                  Etiam viverra nec libero a. A id id tempus molestie sed.
                </p>
                <button className="btn_main border-0 ff_futura fw-normal mt-4">
                  get started
                </button>
              </div>
            </div>
            <div className="col-lg-6 mt-5 mt-lg-0">
              <div>
                <img className=" header_img" src={headerImg} alt="img" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
