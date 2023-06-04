import React from "react";
import heroGif from "../assets/GIf/hero-gif.gif";
function Hero() {
  return (
    <>
      <section
        id="hero"
        className="nav_bg_gradient position-relative w-100 py-xl-0 py-5  d-flex flex-column justify-content-center align-items-center"
      >
        <span className="hero_gradient"></span>
        <span className="hero_layer"></span>
        <span className="hero_upper_layer"></span>
        <span className="hero_circle_layer"></span>
        <img className="hero_gif_position" src={heroGif} alt="heroGif" />
        <div className="container position-relative z_index3 py-lg-5">
          <div className="row">
            <div className="col-xl-6 col-lg-7 col-md-10">
              <div className="z_index1 position-relative">
                <h1 className="ff_futura fw-normal fs_5x2l text_light_white text-capitalize mb-0">
                  Nexai is an advanced AI-powered home assistant
                </h1>
                <p className="ff_futura fw-normal fs_md text_light_white mb-0 py-3">
                  Etiam viverra nec libero a. A id id tempus molestie sed.
                </p>
                <button className="btn_main border-0 ff_futura fw-normal mt-4">
                  get started
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
