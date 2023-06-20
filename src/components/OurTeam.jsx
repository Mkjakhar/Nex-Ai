import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ceo from "../assets/img/svg/ceo.svg";
import founder from "../assets/img/svg/founder.svg";
import developer from "../assets/img/svg/developer.svg";
import leftshape from "../assets/img/svg/ourteamleftshape.svg";

import Pos_FLower_Unique from "../assets/img/svg/Shape--Flower2.svg";
const OurTeam = () => {
  return (
    <section className="bg_blue py-5 position-relative">
      <img
        src={leftshape}
        alt="leftshape"
        className="position-absolute start-0 our_team_left_shape_pos z-1"
      />
      <img
        className="Pos_FLower_Unique2 position-absolute z-1 "
        src={Pos_FLower_Unique}
        alt="Pos_FLower_Unique"
      />
      {/* <img
        src={rightshape}
        alt="rightshape"
        className="position-absolute  end-0 our_team_right_shape_pos"
      /> */}
      <Container className="py-lg-5 my-xl-3 mb-5 position-relative z-2">
        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          className="text-center pt-1"
        >
          <h2
            data-aos="fade-down"
            data-aos-duration="1300"
            className="ff_futura fw-normal fs_4x4l text_light_white text-capitalize"
          >
            Our team
          </h2>
          <p className="mb-0 pb-lg-5 mb-4 width_560px mx-auto ff_futura fw-normal text_light_white opacity_07 fs_xl">
            Proin orci nibh sed nunc malesuada. Nunc amet mattis elementum
            ultricies diam hac. Tellus scelerisque feugiat facilisis.
          </p>
        </div>
        <Row className="pt-2 justify-content-center">
          <Col lg={4} sm={6}>
            <div
              data-aos="fade-right"
              data-aos-duration="1500"
              className="team_box overflow-hidden cursor_pointer me-1 d-flex flex-column justify-content-end"
            >
              <img className="w-100 px-4 pt-4 height_300" src={ceo} alt="ceo" />
              <div className="bg_light_white whitebox transition300 py-3 d-flex align-items-center justify-content-between px-4">
                <div className="transition250">
                  <h3 className="mb-0 ff_futura fw-normal fs_2x4l text_dark_black text-capitalize  ">
                    John
                  </h3>
                  <p className="mb-0  ff_futura fw-normal fs_sm opacity_07 text_dark_black ">
                    Ceo
                  </p>
                </div>
                <svg
                  className="transition250"
                  width="25"
                  height="20"
                  viewBox="0 0 25 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24 1.01009C24 1.01009 21.8903 2.20583 20.7173 2.54489C20.0876 1.85023 19.2508 1.35787 18.3201 1.1344C17.3893 0.910937 16.4095 0.967149 15.5131 1.29543C14.6167 1.62372 13.847 2.20824 13.3081 2.96994C12.7692 3.73163 12.4871 4.63376 12.5 5.55431V6.55744C10.6628 6.60316 8.84224 6.21218 7.2006 5.41933C5.55896 4.62648 4.14715 3.45638 3.09091 2.01323C3.09091 2.01323 -1.09091 11.0415 8.31818 15.054C6.1651 16.4564 3.60021 17.1595 1 17.0603C10.4091 22.076 21.9091 17.0603 21.9091 5.52421C21.9091 5.24534 21.8798 4.96647 21.8255 4.69161C22.8918 3.68245 24 1.01009 24 1.01009Z"
                    stroke="#1C2AC9"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
          </Col>
          <Col lg={4} sm={6}>
            <div
              data-aos="fade-up"
              data-aos-duration="1500"
              className="mt-4 mt-sm-0 team_box overflow-hidden cursor_pointer mx-1 d-flex flex-column justify-content-end"
            >
              <img
                className="w-100 px-4 pt-4 height_300"
                src={founder}
                alt="founder"
              />
              <div className="bg_light_white whitebox transition300 py-3 d-flex align-items-center justify-content-between px-4">
                <div className="transition250">
                  <h3 className="mb-0 ff_futura fw-normal fs_2x4l text_dark_black text-capitalize  ">
                    Adam
                  </h3>
                  <p className="mb-0  ff_futura fw-normal fs_sm opacity_07 text_dark_black ">
                    Founder
                  </p>
                </div>
                <svg
                  className="transition250"
                  width="25"
                  height="20"
                  viewBox="0 0 25 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24 1.01009C24 1.01009 21.8903 2.20583 20.7173 2.54489C20.0876 1.85023 19.2508 1.35787 18.3201 1.1344C17.3893 0.910937 16.4095 0.967149 15.5131 1.29543C14.6167 1.62372 13.847 2.20824 13.3081 2.96994C12.7692 3.73163 12.4871 4.63376 12.5 5.55431V6.55744C10.6628 6.60316 8.84224 6.21218 7.2006 5.41933C5.55896 4.62648 4.14715 3.45638 3.09091 2.01323C3.09091 2.01323 -1.09091 11.0415 8.31818 15.054C6.1651 16.4564 3.60021 17.1595 1 17.0603C10.4091 22.076 21.9091 17.0603 21.9091 5.52421C21.9091 5.24534 21.8798 4.96647 21.8255 4.69161C22.8918 3.68245 24 1.01009 24 1.01009Z"
                    stroke="#1C2AC9"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
          </Col>
          <Col lg={4} sm={6} className="pt-4 pt-sm-0 ">
            <div
              data-aos="fade-left"
              data-aos-duration="1500"
              className="team_box mt-4 mt-lg-0  overflow-hidden cursor_pointer ms-1 d-flex flex-column justify-content-end"
            >
              <img
                className="w-100 px-4 pt-4 height_300"
                src={developer}
                alt="developer"
              />
              <div className="bg_light_white whitebox transition300 py-3 d-flex align-items-center justify-content-between px-4">
                <div className="transition250">
                  <h3 className="mb-0 ff_futura fw-normal fs_2x4l text_dark_black text-capitalize  ">
                    Alex
                  </h3>
                  <p className="mb-0  ff_futura fw-normal fs_sm opacity_07 text_dark_black ">
                    Developer
                  </p>
                </div>
                <svg
                  className="transition250"
                  width="25"
                  height="20"
                  viewBox="0 0 25 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24 1.01009C24 1.01009 21.8903 2.20583 20.7173 2.54489C20.0876 1.85023 19.2508 1.35787 18.3201 1.1344C17.3893 0.910937 16.4095 0.967149 15.5131 1.29543C14.6167 1.62372 13.847 2.20824 13.3081 2.96994C12.7692 3.73163 12.4871 4.63376 12.5 5.55431V6.55744C10.6628 6.60316 8.84224 6.21218 7.2006 5.41933C5.55896 4.62648 4.14715 3.45638 3.09091 2.01323C3.09091 2.01323 -1.09091 11.0415 8.31818 15.054C6.1651 16.4564 3.60021 17.1595 1 17.0603C10.4091 22.076 21.9091 17.0603 21.9091 5.52421C21.9091 5.24534 21.8798 4.96647 21.8255 4.69161C22.8918 3.68245 24 1.01009 24 1.01009Z"
                    stroke="#1C2AC9"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default OurTeam;
