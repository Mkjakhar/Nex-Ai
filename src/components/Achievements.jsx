import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import redmen from "../assets/img/svg/redmen.svg";
import greenmsg from "../assets/img/svg/greenmessage.svg";
import yellowmens from "../assets/img/svg/yellowmens.svg";
import pinkhand from "../assets/img/svg/pinkhandshake.svg";
import bluecup from "../assets/img/svg/bluecup.svg";
const Achievements = () => {
  return (
    <section className="py-5 ">
      <Container className=" py-lg-5 my-lg-5">
        <div>
          <h2 className=" ff_futura text-capitalize text-center fw-normal text_dark_black fs_4x4l">
            our Achievements
          </h2>
          <p className=" ff_futura width_730px mb-0 pb-2 text-center fw-normal text_dark_black fs_md mx-auto mt-3  ">
            Donec cursus eget eleifend aliquam ultrices turpis. Nunc diam tellus
            turpis arcu. Nulla magna lobortis leo tristique nam commodo. Massa
            quam dolor risus enim.
          </p>
        </div>
        <Row className=" justify-content-center  pt-md-5 pt-4 mt-lg-4">
          <Col xl={4} md={6} sm={10}>
            <div className="achievement_boxcommon me-md-2 achievement_box1 text-center cursor_pointer">
              <img src={redmen} alt="redmen" />
              <p className="mb-3 mt-4 pt-1 ff_futura fw-normal fs_3x6l text_dark_black">
                16
              </p>
              <p className=" ff_futura fw-normal fs_sm text_dark_black mb-0">
                Specialist team members of nexAi
              </p>
            </div>
          </Col>{" "}
          <Col xl={4} md={6} sm={10}>
            <div className="achievement_box2 mx-md-2 achievement_boxcommon text-center cursor_pointer">
              <img src={greenmsg} alt="greenmsg" />
              <p className="mb-3 mt-4 pt-1 ff_futura fw-normal fs_3x6l text_dark_black">
                19
              </p>
              <p className=" ff_futura fw-normal fs_sm text_dark_black mb-0">
                States have our technology
              </p>
            </div>
          </Col>{" "}
          <Col xl={4} md={6} sm={10}>
            <div className="achievement_box3 ms-xl-2 me-md-2 achievement_boxcommon text-center cursor_pointer">
              <img src={yellowmens} alt="yellowmens" />
              <p className="mb-3 mt-4 pt-1 ff_futura fw-normal fs_3x6l text_dark_black">
                1231
              </p>
              <p className=" ff_futura fw-normal fs_sm text_dark_black mb-0">
                Happy clients of NexAi
              </p>
            </div>
          </Col>{" "}
          <Col xl={4} md={6} sm={10}>
            <div className="achievement_box4 me-xl-2 ms-md-2 achievement_boxcommon text-center cursor_pointer">
              <img src={pinkhand} alt="pinkhand" />
              <p className="mb-3 mt-4 pt-1 ff_futura fw-normal fs_3x6l text_dark_black">
                18
              </p>
              <p className=" ff_futura fw-normal fs_sm text_dark_black mb-0">
                Partners happy to work with us
              </p>
            </div>
          </Col>{" "}
          <Col xl={4} md={6} sm={10}>
            <div className="achievement_box5 ms-md-2 achievement_boxcommon text-center cursor_pointer">
              <img src={bluecup} alt="bluecup" />
              <p className="mb-3 mt-4 pt-1 ff_futura fw-normal fs_3x6l text_dark_black">
                12k
              </p>
              <p className=" ff_futura fw-normal fs_sm text_dark_black mb-0">
                5 star ratings from our customers
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Achievements;
