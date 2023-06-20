import React, { useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";
import { nexfordata } from "../pagejs/DataMap";
import sliderArrow from "../assets/img/svg/slider-arrow.svg";
import Pos_FLower_Unique from "../assets/img/svg/Shape--Flower2.svg";
const NexFor = () => {
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
        <Container className="pt-md-4 position-relative mt-lg-5 pb-lg-5">
          <div data-aos="zoom-in" data-aos-duration="1500">
            <h2 className="mb-3 heading_common text-center text_light_white alogoHeading">
              Who is Nex for.
            </h2>
            <p className="text-center peragraph_common text_light_white opacity_07 alogoPara">
              Nex is an innovative technology designed to cater to a wide range
              of individuals and households
              <span className="d-xl-block">
                who value convenience, security, and connectivity in their daily
                lives. Its advanced features and
              </span>
              intuitive interface make it accessible and beneficial for various
              user groups.
            </p>
          </div>
        </Container>
        <div className="position-relative">
          <Container className="pb-lg-5">
            <Row className="justify-content-center position-relative">
              <Col md={10} xl={9}>
                <Slider className="algo_slider" ref={algoSlider} {...settings}>
                  {nexfordata.map((data) => {
                    return (
                      <div key={data.Index} className="mx-1 mx-sm-2 my-4">
                        <div className="algorithum_cards mx-2 rounded-1 h-100 d-flex flex-column align-items-center">
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
              <div className="d-flex align-items-center aglo_arrows gap-5 justify-content-center">
                <span onClick={() => algoSlider.current.slickPrev()}>
                  <img className="w-100" src={sliderArrow} alt="sliderArrow" />
                </span>
                <span onClick={() => algoSlider.current.slickNext()}>
                  <img
                    className="w-100 nexfor_next_arrow "
                    src={sliderArrow}
                    alt="sliderArrow"
                  />
                </span>
              </div>
            </Row>
          </Container>
        </div>
      </section>
    </>
  );
};

export default NexFor;
