import React from "react";
import checkbox from "../assets/img/svg/chechbox.svg";
import shape2 from "../assets/img/svg/Shape2.svg";
import { Container } from "react-bootstrap";
const NexaiProcess = () => {
  return (
    <section className="pb-lg-5 position-relative">
      <Container>
        <img
          className="shape_2_position position-absolute d-none d-lg-block"
          src={shape2}
          alt="shape2"
        />
        <h2
          lg={7}
          data-aos="fade-left"
          data-aos-duration="1300"
          className="fs_4x4l pb-lg-5 pb-3 mb-0 text_dark_black ff_futura fw-normal text-center text-capitalize"
        >
          nexAi tokens process
        </h2>
        <div className="height_750 overflow-scroll mb-5">
          <div
            lg={7}
            data-aos="flip-up"
            data-aos-duration="1300"
            className="processcommon_box pink_box cursor_pointer"
          >
            <img className=" w_54" src={checkbox} alt="checkbox" />
            <p className=" mb-0 ff_futura mt-2 fw-normal fs_2x8l text_dark_black">
              Purchasing Nexai Products
            </p>
            <p className=" mb-0 ff_futura fw-normal fs_md mt-2 text_dark_black opacity_07">
              Nex AI tokens will be the primary currency for acquiring Nexai's
              extensive range of software solutions, hardware devices, including
              drones and sensors, and other smart home products available on the
              Nexai marketplace. Users can confidently make purchases using Nex
              tokens, enjoying the convenience and flexibility of a token-based
              payment system.
            </p>
          </div>
          <div lg={7} className="processcommon_box green_box cursor_pointer">
            <img className=" w_54" src={checkbox} alt="checkbox" />
            <p className=" mb-0 ff_futura mt-2 fw-normal fs_2x8l text_dark_black">
              Accessing Exclusive Content
            </p>
            <p className=" mb-0 ff_futura fw-normal fs_md mt-2 text_dark_black opacity_07">
              By holding Nex AI tokens, users will gain privileged access to
              exclusive content within the Nexai platform. These tokens will
              unlock premium features, advanced functionalities, and specialized
              services, enabling users to fully explore and enjoy the enhanced
              capabilities of Nexai's ecosystem.
            </p>
          </div>
          <div lg={7} className="processcommon_box purple_box cursor_pointer">
            <img className=" w_54" src={checkbox} alt="checkbox" />
            <p className=" mb-0 ff_futura mt-2 fw-normal fs_2x8l text_dark_black">
              Loyalty and Rewards
            </p>
            <p className=" mb-0 ff_futura fw-normal fs_md mt-2 text_dark_black opacity_07">
              The Nexai ecosystem will feature a robust loyalty program,
              rewarding users with Nex AI tokens for their active engagement,
              ongoing participation, and dedicated usage of Nexai's products and
              services. Token holders will have the opportunity to redeem their
              accumulated rewards for discounts, incentives, or exclusive
              offers, fostering a strong sense of loyalty and encouraging
              continued involvement.
            </p>
          </div>
          <div lg={7} className="processcommon_box yellow_box cursor_pointer">
            <img className=" w_54" src={checkbox} alt="checkbox" />
            <p className=" mb-0 ff_futura mt-2 fw-normal fs_2x8l text_dark_black">
              Participating in Governance
            </p>
            <p className=" mb-0 ff_futura fw-normal fs_md mt-2 text_dark_black opacity_07">
              Nex AI token holders will play a vital role in the governance of
              the Nexai ecosystem. Through voting mechanisms, token holders will
              have a direct say in the decision-making process. They can express
              their opinions, vote on proposed changes or improvements, and
              actively contribute to shaping the future development and
              direction of the Nexai ecosystem.
            </p>
          </div>
          <div lg={7} className="processcommon_box pink_box cursor_pointer">
            <img className=" w_54" src={checkbox} alt="checkbox" />
            <p className=" mb-0 ff_futura mt-2 fw-normal fs_2x8l text_dark_black">
              Peer-to-Peer Transactions
            </p>
            <p className=" mb-0 ff_futura fw-normal fs_md mt-2 text_dark_black opacity_07">
              Nex AI tokens will enable seamless peer-to-peer transactions
              within the Nexai community. Users will have the ability to
              exchange tokens with others for various purposes, such as
              purchasing pre-owned Nexai devices, engaging in token trading
              activities, or conducting value exchanges directly within the
              ecosystem, all with the utmost security and convenience.
            </p>
          </div>
          <div lg={7} className="processcommon_box green_box cursor_pointer">
            <img className=" w_54" src={checkbox} alt="checkbox" />
            <p className=" mb-0 ff_futura mt-2 fw-normal fs_2x8l text_dark_black">
              Token Staking and Rewards
            </p>
            <p className=" mb-0 ff_futura fw-normal fs_md mt-2 text_dark_black opacity_07">
              Nex AI tokens will support staking mechanisms, allowing users to
              lock up their tokens for a specified period. By staking their
              tokens, users will earn additional rewards, such as interest,
              dividends, or other incentives, further incentivizing token
              holding and fostering long-term engagement and loyalty.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default NexaiProcess;
