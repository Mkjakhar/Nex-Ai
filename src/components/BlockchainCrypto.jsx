import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Nextech from "../assets/img/svg/NEXtechnology.svg";
import shape1 from "../assets/img/svg/Shape1.svg";
const BlockchainCrypto = () => {
  return (
    <section className="py-5 position-relative">
      <img
        className="shape_position d-lg-block d-none position-absolute start-0"
        src={shape1}
        alt="shape1"
      />
      <Container className="py-lg-5 my-lg-5">
        <Row className="py-md-4 justify-content-between align-items-center flex-lg-row flex-column-reverse">
          <Col lg={7} data-aos="fade-down" data-aos-duration="1300">
            <div className="ps-lg-5 ms-lg-4">
              <h2 className="fs_4x4l ff_futura fw-normal text_dark_black text-capitalize">
                Blockchain & Cryptocurrency
              </h2>
              <p className="mb-0 mt-3 fs_xl opacity_07 ff_futura lineheight_160">
                Nex's blockchain technology and cryptocurrency offer numerous
                benefits, including autonomy, lower transaction costs, faster
                transactions, global accessibility, user rewards, economic
                participation, smart contracts, enhanced security, and
                transparency. By leveraging these technologies, Nex creates a
                platform that empowers users, reduces reliance on traditional
                financial institutions, and fosters innovation and economic
                growth.
              </p>
            </div>
          </Col>
          <Col
            lg={7}
            data-aos="zoom-in"
            data-aos-duration="1300"
            data-aos-delay="200"
            lg={5}
            md={10}
            sm={11}
          >
            <img className="w-100 ps-lg-5" src={Nextech} alt="Nextech" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BlockchainCrypto;
