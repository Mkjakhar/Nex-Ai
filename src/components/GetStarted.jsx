import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function GetStarted() {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    setTimeout(() => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".box_custom_GetStartd",
            start: "top 40%",
            end: "bottom top",
            // markers: true,
          },
        })
        .fromTo(
          ".aiheading",
          {
            overflow: "hidden",
            x: "100%",
            opacity: 0,
          },
          {
            x: "0%",
            opacity: 1,
            duration: 1,
            ease: "power3.out",
          },
          "-=1"
        )
        .fromTo(
          ".aipara",
          {
            overflow: "hidden",
            x: "100%",
            opacity: 0,
          },
          {
            x: "0%",
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
      <section className="box_custom_GetStartd d-flex align-items-center py-5 py-lg-0">
        <div className="container">
          <div className="">
            <div className="row   justify-content-end">
              <div className="col-xl-5 col-lg-7 col-md-9">
                <div className="bg__get_blur px-4 py-2 rounded-4">
                  <h2 className="heading_common text_light_white ff_inter aiheading">
                    Ready to get started?
                    <span className="d-md-block">talk to us today!</span>
                  </h2>
                  <p className="peragraph_common text_light_white aipara">
                    Subscribe to our newsletter to get daily updates form nexai
                    and stay in contact with us. sign up below
                  </p>
                  <button className="btn_main mt-lg-5 mt-4">Sign Up now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default GetStarted;
