import React from "react";

function GetStarted() {
  return (
    <>
      <section className="box_custom_GetStartd d-flex align-items-center py-5 py-lg-0">
        <div className="container">
          <div className="">
            <div className="row   justify-content-end">
              <div className="col-xl-5 col-lg-7 col-md-9 ">
                <div className="bg__get_blur px-4 py-2 rounded-4">
                  <h2 className="heading_common text_light_white ff_inter">
                    Ready to get started?
                    <span className="d-md-block">talk to us today!</span>
                  </h2>
                  <p className="peragraph_common text_light_white">
                    Subscribe to our newsletter to get daily updates form nexai
                    and stay in contact with us. sign up below
                  </p>
                  <button className="btn_main mt-lg-5 mt-4 ">
                    Sign Up now
                  </button>
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
