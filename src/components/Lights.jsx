import React from "react";
import girlImg from "../assets/img/webp/girl-img.webp";
import string from "../assets/img/svg/stting.svg";
import Slider from "react-slick";
import { Slider__Data } from "../Pagejs/DataMap";

function Lights() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    pauseOnHover: false,
    autoplaySpeed: 3000,
    slidesToScroll: 1,
    arrows: false,
    fade: "fade",
  };
  return (
    <>
      <section id="lights" style={{ background: "#FFE4C7" }} className="">
        {/* <div className="container"> */}
        <div className="row flex-column-reverse flex-lg-row align-items-center">
          <div className="col-xl-7 col-lg-6">
            <div className="mt-4 mt-lg-0">
              <img className="Img_width_Light_Custom" src={girlImg} alt="img" />
            </div>
          </div>
          <div className="col-xl-5 col-lg-6 my-5 my-lg-0 ">
            <Slider {...settings}>
              {Slider__Data.map((data) => {
                return (
                  <div className="mx-sm-3 mx-1">
                    <div>
                      <img src={data.img_String} alt="vector" />
                      <h2 className="ff_futura fw-normal fs_4x4l text_dark_black text-capitalize mb-0 mt-4 pt-1">
                        {data.heading}
                        <span className="d-block">{data.headingCracked} </span>
                      </h2>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
        {/* </div> */}
      </section>
    </>
  );
}

export default Lights;
