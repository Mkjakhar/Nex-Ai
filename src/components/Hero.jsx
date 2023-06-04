import React from "react";
import WbpAi from "../assets/GIf/Group 71.gif";

function Hero() {
  return (
    <>
      <section
        // style={{
        //   backgroundSize: "cover",
        //   backgroundPosition: "right",
        //   backgroundRepeat: "no-repeat",
        // }}
        id="hero"
        className="sec_bg_Gradient position-relative w-100 py-xl-0 pt-5  d-flex flex-column justify-content-center align-items-center">
        <div className="sec_bg__Gif bg_layr_blur position-absolute w-100 h-100 z_index2 top-0 start-0 "></div>

        <div className="container position-relative z_index3 py-lg-5">
          <div className="row">
            <div className="col-xl-6 col-lg-7 col-md-10">
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
          </div>
        </div>
        <div className="w-100  mt-5 mt-lg-0 d-lg-none position-relative z_index3">
          <div>
            <img className=" header_img" src={WbpAi} alt="img" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
