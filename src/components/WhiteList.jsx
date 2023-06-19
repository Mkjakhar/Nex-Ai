import React, { useEffect } from "react";
import Shapr_flower from "../assets/img/svg/Shape__Flower.svg";

function WhiteList() {
  return (
    <>
      <section className="min_h_wedose_custom position-relative d-flex justify-content-center align-items-center">
        <img
          className="Flower__Image position-absolute mb-xxl-5"
          src={Shapr_flower}
          alt="Shapr_flower"
        />
        <div className="container position-relative z_index3">
          <div
            data-aos="fade-down"
            data-aos-duration="1300"
            className="d-flex flex-column align-items-center justify-content-center "
          >
            <h2
              data-aos="fade-left"
              data-aos-duration="1300"
              data-aos-delay="300"
              className="heading_common text_dark_black text-center text-capitalize mb-0 wedoesHead"
            >
              Whitelist & Presale
            </h2>
            <p className="ff_futura fw-normal fs_md text_dark_black text-center op07 mb-0 mt-2 pb-3 wedoesPara">
              For our early supporters, we have curated an exclusive presale
              opportunity. To ensure your participation,
              <span className="d-lg-block">
                we will be implementing a whitelist registration process. By
                signing up on the whitelist and following the
              </span>
              <span className="d-lg-block">
                provided instructions, you will secure your spot in this
                exciting event. To stay informed about the whitelist
              </span>
              <span className="d-lg-block">
                opening and receive timely updates, kindly provide us with your
                email address, and we will notify you
              </span>
              accordingly.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default WhiteList;
