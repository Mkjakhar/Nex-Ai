import React, { useEffect, useRef } from "react";
import girlImg from "../assets/img/webp/girl-img.webp";
import Slider from "react-slick";
import { Slider__Data } from "../Pagejs/DataMap";
import { Container } from "react-bootstrap";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Lights() {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    setTimeout(() => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".serviceslider",
            start: "top 40%",
            end: "bottom top",
            scrub: true,
            // markers: true,
          },
        })
        .fromTo(
          ".Img_width_Light_Custom",
          {
            opacity: 0,
            x: "-50%",
          },
          {
            x: "0%",
            opacity: 1,
            duration: 1,

            ease: "power3.out",
          },
          "-=1"
        );
    });
  }, []);

  const lightSlider = useRef();
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    pauseOnHover: false,
    autoplaySpeed: 4000,
    slidesToScroll: 1,
    arrows: false,
    fade: "fade",
  };
  return (
    <>
      <section className="position-relative serviceslider">
        <Container>
          <h4 className="fs_3xl ff_futura text_dark_black text-center pb-4 pb-sm-5">
            <i>
              These are just a few examples of how Nex can be utilized across
              <span className="d-xl-block"> different aspects of life :</span>
            </i>
          </h4>
        </Container>
        <div
          id="lights"
          className="position-relative"
          style={{ background: "#FFE4C7" }}
        >
          <div className="custom_container">
            <div className="row flex-column-reverse flex-lg-row align-items-center">
              <div className="col-xl-7 col-lg-6">
                <div className="mt-4 mt-lg-0">
                  <img
                    className="Img_width_Light_Custom"
                    src={girlImg}
                    alt="img"
                  />
                </div>
              </div>
              <div className="col-xl-5 col-lg-6">
                <Slider ref={lightSlider} {...settings}>
                  {Slider__Data.map((data) => {
                    return (
                      <div className="d-flex align-items-center flex-column align-items-lg-start serviceslider">
                        <h2 className="ff_futura text-center text-lg-start fw-normal light_slider_para fs_4x4l text_dark_black text-capitalize mb-2 mt-4 pt-1">
                          {data.heading}
                        </h2>
                        <p className="light_slider_para text_dark_black mb-0 mb-sm-3 ff_futura text-center text-lg-start opacity_07">
                          {data.paragraph}
                        </p>
                      </div>
                    );
                  })}
                </Slider>
                <div className="d-flex align-items-center light_arrows gap-5 justify-content-center">
                  <span onClick={() => lightSlider.current.slickPrev()}>
                    <svg
                      width="26"
                      height="48"
                      viewBox="0 0 26 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.29297 47.0984L24 24.3928L1.29297 1.68574"
                        stroke="#0B0A0A"
                        strokeWidth="2"
                      />
                    </svg>
                  </span>
                  <span onClick={() => lightSlider.current.slickNext()}>
                    <svg
                      width="26"
                      height="48"
                      viewBox="0 0 26 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.29297 47.0984L24 24.3928L1.29297 1.68574"
                        stroke="#0B0A0A"
                        strokeWidth="2"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Lights;
