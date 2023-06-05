import React, { useEffect } from "react";
import assistant1 from "../assets/img/webp/assistant-1.webp";
import assistant2 from "../assets/img/webp/assistant-2.webp";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Assistant() {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    setTimeout(() => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".second",
            start: "top 40%",
            end: "bottom top", 
            // markers: true,
          },
        })
        .fromTo(
          ".leftReveale",
          {
            overflow: "hidden",
            x: "-100%",
            opacity: 0,
          },
          {
            x: "0%",
            opacity: 1,  
            duration:2,
            ease: "power3.out",
          },
          "-=1"
        )
        .fromTo(
          ".rightReveal",
          {
            overflow: "hidden",
            x: "100%",
            opacity: 0,
          },
          {
            x: "0%",
            opacity: 1,
            duration: 2,
            stagger: 1,
            ease: "power3.out",
          },
          "-=0.5"
        );
    }, );
  }, []);
  return (
    <>
      <section className="second py-5 my-lg-5">
        <div className="container position-relative z_index10">
          <h2 className="heading_common text_dark_black text-center text-capitalize mb-0">
            Ai-Powered Home Assistant
          </h2>
          <div className="row mt-lg-5 mt-4">
            <div className="col-lg-6">
               
              <div className="assistent_cards leftReveale">
                <div className="overflow-hidden">
                  <img className="w-100" src={assistant1} alt="img" />
                </div>
                <p className="peragraph_common text_dark_black mb-0 mt-3 pe-lg-5">
                  <em>
                    Nexai is an advanced
                    <span className="text_dark_blue cursor_pointer">
                      {" "}
                      AI-powered{" "}
                    </span>
                    home assistant that brings the future to your fingertips.
                    With its ability to engage in natural, fluent conversations
                    in over 15 languages,
                  </em>
                </p>
              </div>
            </div>
            <div className="col-lg-6 mt-5 mt-lg-0">
            
              <div className="assistent_cards rightReveal">
                <div className="overflow-hidden">
                  <img className="w-100" src={assistant2} alt="img" />
                </div>
                <p className="peragraph_common text_dark_black mb-0 mt-3 pe-lg-5">
                  <em>
                    Nexai offers an incredibly
                    <span className="text_dark_blue cursor_pointer">
                      {" "}
                      futuristic experience{" "}
                    </span>
                    . It can take the initiative to ask about your day, schedule
                    meetings, provide timely reminders assist with cooking by
                    suggesting ingredients, track your fitness and nutrition
                    goals, and even handle bill payments.
                  </em>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Assistant;
