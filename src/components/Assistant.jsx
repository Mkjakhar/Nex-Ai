import React from "react";
import assistant1 from "../assets/img/webp/assistant-1.webp";
import assistant2 from "../assets/img/webp/assistant-2.webp";

function Assistant() {
  return (
    <>
      <section className="py-5 my-5">
        <div className="container">
          <h2 className=" ff_futura fw-normal fs_4x4l text_dark_black text-center text-capitalize mb-0">
            Ai-Powered Home Assistant
          </h2>
          <div className="row mt-5">
            <div className="col-lg-6">
              <div>
                <img className="w-100" src={assistant1} alt="img" />
                <p className=" ff_futura fw-normal fs_xl text_dark_black mb-0 mt-3 pe-lg-5">
                  <em>
                    Nexai is an advanced AI-powered home assistant that brings
                    the future to your fingertips. With its ability to engage in
                    natural, fluent conversations in over 15 languages,
                  </em>
                </p>
              </div>
            </div>
            <div className="col-lg-6 mt-5 mt-lg-0">
              <div>
                <img className="w-100" src={assistant2} alt="img" />
                <p className=" ff_futura fw-normal fs_xl text_dark_black mb-0 mt-3 pe-lg-5">
                  <em>
                    Nexai offers an incredibly futuristic experience. It can
                    take the initiative to ask about your day, schedule
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
