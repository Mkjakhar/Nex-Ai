import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import securityimg from "../assets/img/svg/hardwareimg.svg";
import flowershape from "../assets/img/svg/securityshape.svg";
const Security = () => {
  return (
    <section className="pt-md-5 pt-4 position-relative">
      <img
        src={flowershape}
        alt="shapeflower"
        className="position-absolute security_pos_flower d-none d-lg-block"
      />
      <Container className="pt-sm-5 mt-xl-5">
        <Row className="justify-content-between pb-xl-5 pt-5 pt-lg-0 align-items-center align-items-xxl-start flex-column-reverse flex-lg-row text-center text-lg-start">
          <Col
            md={11}
            lg={6}
            data-aos="fade-down-right"
            data-aos-duration="1500"
            className="pt-4 pt-lg-0"
          >
            <h2 className="ff_futura fw-normal fs_4x4l text_dark_black mb-3">
              Home Security System
              <span className="d-lg-block"> and Hardware</span>
            </h2>
            <p className="ff_futura fw-normal fs_xl text_dark_black opacity_07 line_height_160_per pb-1">
              Nexai is an advanced AI-powered home assistant that brings
              <span className="d-lg-block">
                the future to your fingertips. With its ability to engage in
              </span>
              <span className="d-lg-block">
                natural, fluent conversations in over 15 languages, Nexai
              </span>
              offers an incredibly futuristic experience.
            </p>
            <p className="ff_futura fw-normal fs_xl text_dark_black opacity_07 mb-0 line_height_160_per">
              It can take the initiative to ask about your day, schedule
              <span className="d-lg-block">
                meetings, provide timely reminders, assist with cooking by
              </span>
              <span className="d-lg-block">
                suggesting ingredients, track your fitness and nutrition goals,
              </span>
              and even handle bill payments.
            </p>
          </Col>
          <Col
            md={11}
            lg={6}
            data-aos="fade-down-left"
            data-aos-duration="1500"
            data-aso-delay="200"
            className="text-center text-lg-end"
          >
            <div className="position-relative max_w_503px ms-auto">
              <p className="ff_futura fw-normal text-start fs_xl font_italic text_light_white security_text_bg position-absolute px-3 bottom-0 start-0 mb-0 w-88">
                It can take the initiative to ask about your day, schedule
                meetings
              </p>
              <img
                src={securityimg}
                alt="securityimg"
                className="w-100 max_w_503px"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Security;
