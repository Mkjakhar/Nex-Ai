import React from "react";
import { Container } from "react-bootstrap";
import zigzag from "../assets/img/png/zigzag.png";

const NexaiToken = (props) => {
  return (
    <section className="token_bg py-5 position-relative">
      <img
        className="position-absolute zigzag_position top-0 start-0  zigzag_animation"
        src={zigzag}
        alt="zigzag"
      />
      <img
        className="position-absolute zigzag2_position top-0 end-0 zigzag_animation2"
        src={zigzag}
        alt="zigzag"
      />
      <Container className="py-lg-5 my-5">
        <div
          className={`text-center pb-5 ${props.maxwidth} mx-auto position-relative z_index1`}
        >
          <h2
            data-aos="zoom-in"
            data-aos-duration="1500"
            className="ff_futura fw-normal fs_5x2l text-capitalize text_light_white "
          >
            {props.heading}
          </h2>
          <p className="ff_futura mb-0 mt-3 fw-normal fs_md text_light_white">
            {props.para}
          </p>
        </div>
      </Container>
    </section>
  );
};

export default NexaiToken;
