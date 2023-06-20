import React, { useEffect } from "react";
import Shapr_flower from "../assets/img/svg/Shape__Flower.svg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
function WeDoes() {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    setTimeout(() => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".min_h_wedose_custom",
            start: "top 40%",
            end: "bottom top",
            // markers: true,
          },
        })
        .fromTo(
          ".wedoesHead",
          {
            opacity: 0,
            y: "100%",
          },
          {
            y: "0%",
            opacity: 1,
            duration: 1,
            stagger: 0.5,
            ease: "power3.out",
          },
          "-=0.4"
        )
        .fromTo(
          ".wedoesPara",
          {
            overflow: "hidden",
            y: "100%",
            opacity: 0,
          },
          {
            y: "0%",
            opacity: 1,
            duration: 2,
            stagger: 0.1,
            ease: "power3.out",
          },
          "-=1"
        )
        .fromTo(
          ".Flower__Image",
          {
            overflow: "hidden",
            y: "100%",
            opacity: 0,
          },
          {
            y: "0%",
            opacity: 1,
            duration: 2,
            stagger: 0.1,
            ease: "power3.out",
          },
          "-=1"
        );
    });
  }, []);
  return (
    <>
      <section className="min_h_wedose_custom position-relative d-flex justify-content-center align-items-center">
        <img
          className="Flower__Image position-absolute mb-xxl-5"
          src={Shapr_flower}
          alt="Shapr_flower"
        />
        <div className="container position-relative z_index3">
          <div className="d-flex flex-column align-items-center justify-content-center">
            <h2 className="heading_common text_dark_black text-center text-capitalize mb-0 wedoesHead">
              NexAi does all this. And more.
            </h2>
            <p className="ff_futura fw-normal fs_md text_dark_black text-center op07 mb-0 mt-2 pb-3 wedoesPara">
              Nexai is an advanced home assistant that will revolutionize the
              way we interact with our
              <span className="d-lg-block">
                smart devices at home. Powered by sophisticated artificial
                intelligence, it leverages
              </span>
              blockchain technology to offer a secure and efficient user
              experience.
            </p>
            <button className="btn_main border-0 ff_futura fw-semibold mt-4">
              get started
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default WeDoes;
