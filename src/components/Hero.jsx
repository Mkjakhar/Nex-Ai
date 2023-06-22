import React, { useEffect } from "react";
import video from "../assets/video/herosecvideo.webm";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
function Hero() {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    setTimeout(() => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".first",
            start: "top 30%",
            end: "bottom top",

            // markers: true,
          },
        })
        .fromTo(
          ".hafeez_data span",
          {
            overflow: "hidden",
            x: "-50%",
            opacity: 0,
          },
          {
            x: "0%",
            delay: 4.5,
            opacity: 1,
            stagger: 0.1,
            ease: "power3.out",
          },
          "-=0.5"
        )
        .fromTo(
          ".heroPara",
          {
            overflow: "hidden",

            opacity: 0,
          },
          {
            opacity: 1,
            duration: 2,
            stagger: 1,
            ease: "power3.out",
          },
          "-=0.5"
        )
        .fromTo(
          ".hero_btn",
          {
            overflow: "hidden",

            opacity: 0,
          },
          {
            opacity: 1,
            duration: 1,
            stagger: 1,
            ease: "power3.out",
          },
          "-=0.5"
        );
    });
  }, []);
  return (
    <>
      <section
        id="hero"
        className="first nav_bg_gradient position-relative w-100 py-xl-0 py-5  d-flex flex-column justify-content-center align-items-center"
      >
        <span className="hero_gradient"></span>
        <span className="hero_layer"></span>
        <span className="hero_upper_layer"></span>
        <span className="hero_circle_layer"></span>
        <video className="hero_gif_position" autoPlay muted loop>
          <source src={video} type="video/mp4" />
        </video>
        <div className="container position-relative z_index3 py-5">
          <div className="row">
            <div className="col-xl-6 col-lg-7 col-md-10">
              <div className="z_index1 position-relative">
                <h1 className="ff_futura fw-normal fs_5x2l text_light_white text-capitalize mb-0 hafeez_data">
                  <span>N</span>
                  <span>e</span>
                  <span>x</span>
                  <span>a</span>
                  <span>i </span>
                  <span>i</span>
                  <span>s </span>
                  <span>a</span>
                  <span>n </span>
                  <span>ad</span>
                  <span>va</span>
                  <span>nc</span>
                  <span>ed </span>
                  <span>AI</span>
                  <span>-</span>
                  <span>po</span>
                  <span>we</span>
                  <span>red </span>
                  <span>ass</span>
                  <span>is</span>
                  <span>ta</span>
                  <span>nt</span>
                </h1>
                <p className="ff_futura fw-normal fs_md text_light_white mb-0 py-3 heroPara">
                  Etiam viverra nec libero a. A id id tempus molestie sed.
                </p>
                <button className="btn_main border-0 ff_futura fw-semibold mt-4 hero_btn">
                  get started
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
