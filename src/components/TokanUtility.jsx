import React, { useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";
import { accordian } from "../Pagejs/DataMap";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
function TokanUtility() {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    setTimeout(() => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".tokan",
            start: "top 30%",
            end: "bottom top",
          },
        })
        .fromTo(
          ".Tokenhead",
          {
            scaleX: "50deg",
            opacity: 0,
          },
          {
            opacity: 1,
            duration: 1,
            stagger: 0.5,
            ease: "power3.out",
          },
          "-=1"
        )
        .fromTo(
          ".Accordion_linear",
          {
            overflow: "hidden",
            scale: 0,
            opacity: 0,
          },
          {
            scale: 1,
            opacity: 1,
            duration: 2,
            stagger: 0.2,
            ease: "power3.out",
          },
          "-=1"
        );
    });
  }, []);
  return (
    <>
      <section
        id="Accordian"
        className="py-5 my-xl-5  pb-sm-5 position-relative tokan"
      >
        <div className="container">
          <div className="py-lg-5">
            <h2 className="heading_common text-center mb-md-5 mb-4 Tokenhead">
              NexAI Token & utility
            </h2>
            <div>
              <Accordion className="Accordion px-0" defaultActiveKey="3" flush>
                {accordian.map((data) => {
                  return (
                    <Accordion.Item
                      className="px-0 Accordion_linear position-relative py-4"
                      eventKey={data.Index}
                    >
                      <Accordion.Header className="accordion_Header">
                        <h2 className="ff_futura fw-normal fs_4xl text_dark_black mb-0">
                          {data.Heading}
                        </h2>
                      </Accordion.Header>
                      <Accordion.Body>
                        <p
                          style={{ maxWidth: "987px" }}
                          className="peragraph_common mb-0 mt-2 pt-1"
                        >
                          {data.Pera}
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                  );
                })}
              </Accordion>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default TokanUtility;
