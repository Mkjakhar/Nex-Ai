import React from "react";
import { Container } from "react-bootstrap";
import zigzag from "../assets/img/png/zigzag.png";

const NexaiToken = () => {
  return (
    <section className="token_bg py-5 position-relative">
      <img
        className=" position-absolute zigzag_position  start-0"
        src={zigzag}
        alt="zigzag"
      />
      <img
        className=" position-absolute zigzag2_position  end-0"
        src={zigzag}
        alt="zigzag"
      />
      <Container className="py-lg-5 my-5">
        <div className="text-center pb-5 position-relative z_index1">
          <h2 className="ff_futura fw-normal fs_5x2l text-capitalize text_light_white ">
            Nexai Token & utility
          </h2>
          <p className="ff_futura mb-0 mt-3 fw-normal fs_md text_light_white">
            Etiam viverra nec libero a. A id id tempus molestie sed.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default NexaiToken;
