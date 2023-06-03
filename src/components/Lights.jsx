import React from "react";
import girlImg from "../assets/img/webp/girl-img.webp";
import string from "../assets/img/svg/stting.svg";
import Slider from "react-slick";

function Lights() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <>
      <section style={{ background: "#FFE4C7" }} className="py-5">
        {/* <div className="container"> */}
        <div className="row align-items-center">
          <div className="col-lg-7">
            <div>
              <img className="w-100" src={girlImg} alt="img" />
            </div>
          </div>
          <div className="col-lg-5 mt-5 mt-lg-0">
            <Slider {...settings}>
              <div>
                <div>
                  <img src={string} alt="vector" />
                  <h2 className=" ff_futura fw-normal fs_4x4l text_dark_black text-capitalize mb-0 mt-4 pt-1">
                    NexAi, Turn on the <span className="d-block"> lights.</span>
                  </h2>
                </div>
              </div>
              <div>
                <div>
                  <img src={string} alt="vector" />
                  <h2 className=" ff_futura fw-normal fs_4x4l text_dark_black text-capitalize mb-0 mt-4 pt-1">
                    NexAi, Turn on the <span className="d-block"> lights.</span>
                  </h2>
                </div>
              </div>
              <div>
                <div>
                  <img src={string} alt="vector" />
                  <h2 className=" ff_futura fw-normal fs_4x4l text_dark_black text-capitalize mb-0 mt-4 pt-1">
                    NexAi, Turn on the <span className="d-block"> lights.</span>
                  </h2>
                </div>
              </div>
            </Slider>
          </div>
        </div>
        {/* </div> */}
      </section>
    </>
  );
}

export default Lights;
