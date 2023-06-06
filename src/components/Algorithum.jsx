import React, { useEffect, useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import nlp from "../assets/img/svg/nlp.svg";
import Slider from "react-slick";
import { algorithumData } from "../pagejs/DataMap";
import sliderArrow from "../assets/img/svg/slider-arrow.svg";
import Pos_FLower_Unique from "../assets/img/svg/Shape--Flower2.svg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const Algorithum = () => {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    setTimeout(() => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".alogoHeading",
            start: "top 40%",
            end: "bottom top",
            // markers: true,
          },
        })
        .fromTo(
          ".alogoHeading",
          {
            overflow: "hidden",
            x: "-100%",
            opacity: 0,
          },
          {
            x: "0%",
            opacity: 1,
            duration: 2,
            ease: "power3.out",
          },
          "-=1"
        )
        .fromTo(
          ".alogoPara",
          {
            scale: 0,
            opacity: 0,
            visibility: "hidden",
          },
          {
            scale: 1,
            overflow: "hidden",
            visibility: "visible",
            opacity: 1,
            duration: 1,
            stagger: 1,
            ease: "power3.out",
          },
          "-=0.5"
        )
        .fromTo(
          ".algorithum_cards",
          {
            scale: 0,
            opacity: 0,
          },
          {
            scale: 1,
            opacity: 1,
            duration: 1,
            stagger: 0.01,
            ease: "power3.out",
          },
          "-=0.5"
        );
    });
  }, []);

  const algoSlider = useRef();
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
      <section className="bg_blue py-5 position-relative overflow-hidden">
        <img
          className="Pos_FLower_Unique position-absolute "
          src={Pos_FLower_Unique}
          alt="Pos_FLower_Unique"
        />
        <Container className="pt-md-4 position-relative">
          <h2 className="mb-3 heading_common text-center text_light_white alogoHeading">
            Discover the Advanced
            <span className="d-xl-block"> Algorithms Powering Nexai's </span>
            Home Assistant
          </h2>
          <p className="text-center peragraph_common text_light_white opacity_07 alogoPara">
            Within Nexai, we utilize several advanced algorithms to enable the
            sophisticated features
            <span className="d-xl-block">
              {" "}
              and capabilities of our home assistant. Here are some of the key
              algorithms we employ:{" "}
            </span>
          </p>
        </Container>
        <div className="position-relative">
          <Container>
            <Row className="justify-content-center">
              <Col md={10} xl={9}>
                <Slider className="algo_slider" ref={algoSlider} {...settings}>
                  {algorithumData.map((data) => {
                    return (
                      <div key={data.Index} className="mx-1 mx-sm-2 my-4">
                        <div className="algorithum_cards mx-2 rounded-1 h-100 d-flex flex-column align-items-center">
                          <img width={35} src={data.img} alt="nlp" />
                          <h4 className="mt-3 fw-normal text_light_white ff_futura fs_2x8l mb-0 text-center">
                            {data.Heading}
                          </h4>
                          <p className="text-center peragraph_common text_light_white opacity_07 fw-normal mt-2 mb-0">
                            {data.Para}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </Slider>
              </Col>
            </Row>
            <div className="d-flex align-items-center aglo_arrows gap-5 justify-content-center">
              <span onClick={() => algoSlider.current.slickPrev()}>
                <img className="w-100" src={sliderArrow} alt="sliderArrow" />
              </span>
              <span onClick={() => algoSlider.current.slickNext()}>
                <img className="w-100" src={sliderArrow} alt="sliderArrow" />
              </span>
            </div>
          </Container>
        </div>
      </section>
    </>
  );
};

export default Algorithum;
