import React from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import slidershape from "../assets/img/svg/slidertokenshape.svg";
const Community = () => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,

    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          dots: false,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
    ],
  };
  return (
    <section className=" bg_blue overflow-hidden py-lg-5 position-relative">
      <img
        src={slidershape}
        alt="slidershape"
        className="position-absolute start-0 top-0 slidershape d-none d-lg-block"
      />
      <Container className="py-5 my-md-5">
        <div
          lg={7}
          data-aos="fade-down"
          data-aos-duration="1300"
          className="text-center pb-lg-5 position-relative z_index1"
        >
          <h2 className="ff_futura text_light_white fs_4x4l fw-normal mb-3 text-capitalize">
            Advantages for the Community
          </h2>
          <p className="ff_futura text_light_white  fw-normal opacity_07 f  s_md font_italic">
            By building the software on blockchain, Nexai provides the following
            advantages
          </p>
        </div>
        <Slider {...settings} className="token_page_slider py-4 py-lg-5">
          <div lg={7} data-aos="flip-left" data-aos-duration="1300">
            <h3 className="ff_futura fw-normal fs_3xl text-capitalize text_light_white">
              Rewards and Incentives
            </h3>
            <p className="ff_futura fw-normal fs_sm  text_light_white opacity_07 pt-3 line_height_160_per">
              NexCoin can be used as rewards and incentives for users who
              <span className="d-xl-block">
                actively engage and contribute to the Nex platform. Users can
                earn
              </span>
              <span className="d-xl-block">
                NexCoin by participating in activities, creating content,
                referring
              </span>
              <span className="d-xl-block">
                other users, or being active community members. This promotes
              </span>
              user activity and fosters a stronger and more engaged community.
            </p>
          </div>
          <div
            lg={7}
            data-aos="flip-left"
            data-aos-duration="1300"
            data-aos-delay="200"
          >
            <h3 className="ff_futura fw-normal fs_3xl text-capitalize font_italic text_light_white">
              Economic Participation
            </h3>
            <p className="ff_futura fw-normal fs_sm  text_light_white opacity_07 pt-3 line_height_160_per">
              By utilizing NexCoin, users gain the opportunity to be ,
              economically
              <span className="d-xl-block">
                involved within the Nex ecosystem. They can buy and sell goods
              </span>
              <span className="d-xl-block">
                services, and assets within the platform and even trade with
                other
              </span>
              <span className="d-xl-block">
                cryptocurrencies. This fosters economic growth and provides
                users
              </span>
              <span className="d-xl-block">
                with a chance to benefit from the value created within the Nex
              </span>
              community.
            </p>
          </div>
          <div
            lg={7}
            data-aos="flip-left"
            data-aos-duration="1300"
            data-aos-delay="400"
          >
            <h3 className="ff_futura fw-normal fs_3xl text-capitalize font_italic line_height_160_per text_light_white">
              Sharing Economy and Peer-to-{" "}
              <span className="d-xl-block">Peer Transactions</span>
            </h3>
            <p className="ff_futura fw-normal fs_sm  text_light_white opacity_07 pt-3 line_height_160_per">
              NexCoin enables seamless and secure sharing economy within
              <span className="d-xl-block">
                the platform. Users can rent out their assets, offer services,
                or directly
              </span>
              <span className="d-xl-block">
                purchase products from other community members, eliminating the
              </span>
              <span className="d-xl-block">
                need for intermediaries or traditional payment systems. This
                creates
              </span>
              <span className="d-xl-block">
                a decentralized and transparent economic model that benefits
                both
              </span>
              users and the platform.
            </p>
          </div>
        </Slider>
      </Container>
    </section>
  );
};

export default Community;
