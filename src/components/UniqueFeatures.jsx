import React, { useEffect } from "react";
import { Unique } from "../pagejs/DataMap";
import Pos_FLower_Unique from "../assets/img/svg/Shape--Flower2.svg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function UniqueFeatures() {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    setTimeout(() => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".third",
            start: "top 40%",
            end: "bottom top",
            // markers: true,
          },
        })
        .fromTo(
          ".topReveale",
          {
            scaleX: "50deg",
            opacity: 0,
            skewX: 30,
          },
          {
            scale: 1,
            skewX: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.5,
            ease: "power3.out",
          },
          "-=1"
        )
        .fromTo(
          ".textReveal span",
          {
            overflow: "hidden",
            x: "100%",
            opacity: 0,
          },
          {
            x: "0%",
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
      <section className="py-5 mb-lg-5 position-relative third">
        <img
          className="Pos_FLower_Unique position-absolute "
          src={Pos_FLower_Unique}
          alt="Pos_FLower_Unique"
        />
        <img
          className="Pos_FLower_Unique2 position-absolute z_index4 "
          src={Pos_FLower_Unique}
          alt="Pos_FLower_Unique"
        />
        <div className="container position-relative z_index10 mb-xl-4">
          <div className="py-lg-5">
            <h2 className="textReveal heading_common text-center mb-5 pb-3 text_dark_black text-none">
              <span>U</span>
              <span>n</span>
              <span>i</span>
              <span>q</span>
              <span>u</span>
              <span>e </span>
              <span>f</span>
              <span>e</span>
              <span>a</span>
              <span>t</span>
              <span>u</span>
              <span>r</span>
              <span>e</span>
              <span>s</span>
            </h2>
            <div
              style={{ maxHeight: "660px" }}
              className="scrollBar-none hover_box d-flex overflow-auto flex-column align-items-center gap-4  "
            >
              {Unique.map((data) => {
                return (
                  <div
                    style={{ borderRadius: "32px" }}
                    className={`topReveale content_box transition200 col-lg-8 col-md-10  pe-4 ${data.Bg_Class} ${data.borderColor}`}
                  >
                    <div className="p-4 mb-2">
                      <span className="svg transition300 d-inline-block">
                        {data.svg_Img}
                      </span>
                      <div className="pt-3 mt-2">
                        <h3 className="ff_futura fs_2x8l fw-normal text_dark_black mb-2">
                          {data.Heading}
                        </h3>
                        <p className="peragraph_common text_dark_black op07">
                          {data.PeraGraph}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default UniqueFeatures;
