import React from "react";
import logo from "../assets/img/svg/footer-logo.svg";
function Footer() {
  return (
    <>
      <section
        style={{ backgroundColor: "#ebebeb" }}
        id="footer"
        className="pt-5 pb-4"
      >
        <div className="container">
          <div className="pb-lg-5 pb-4">
            <div className="row justify-content-end">
              <div className="col-md-7">
                <div className="row">
                  <div className="col-xl-6 col-md-10">
                    <div>
                      <a href="#header">
                        <img src={logo} alt="img" />
                      </a>
                      <p className="ff_futura fw-normal fs_sm text_dark_black mb-0 mt-2 pt-1">
                        Nullam viverra natoque amet et sed scelerisque viverra
                        fringilla platea. Ullamcorper.
                      </p>
                      <span className="mt-3 d-flex gap-2">
                        <a href="#">
                          <svg
                            width="25"
                            height="25"
                            viewBox="0 0 25 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M24.0602 12.8274C24.0602 6.18684 18.6707 0.797363 12.0301 0.797363C5.38947 0.797363 0 6.18684 0 12.8274C0 18.65 4.13835 23.4981 9.62406 24.6169V16.4365H7.21804V12.8274H9.62406V9.81992C9.62406 7.49812 11.5128 5.60939 13.8346 5.60939H16.8421V9.21842H14.4361C13.7744 9.21842 13.2331 9.75977 13.2331 10.4214V12.8274H16.8421V16.4365H13.2331V24.7974C19.3083 24.1959 24.0602 19.071 24.0602 12.8274Z"
                              fill="#0B0A0A"
                              fillOpacity="0.5"
                            />
                          </svg>
                        </a>
                        <a className="ms-1" href="#">
                          <svg
                            width="25"
                            height="25"
                            viewBox="0 0 25 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12.0602 0.797363C18.6945 0.797363 24.0602 6.16308 24.0602 12.7974C24.0602 19.4316 18.6945 24.7974 12.0602 24.7974C5.4259 24.7974 0.0601807 19.4316 0.0601807 12.7974C0.0601807 6.16308 5.4259 0.797363 12.0602 0.797363ZM9.86589 19.1231C15.1802 19.1231 18.0945 14.7174 18.0945 10.8945V10.5174C18.6602 10.1059 19.1573 9.59165 19.5345 9.00879C19.0202 9.23165 18.4545 9.38593 17.8716 9.47165C18.4716 9.11165 18.9345 8.54594 19.1402 7.87736C18.5745 8.20308 17.9573 8.44308 17.3059 8.58022C16.7745 8.01451 16.0202 7.67165 15.1973 7.67165C13.603 7.67165 12.3002 8.97451 12.3002 10.5688C12.3002 10.7916 12.3173 11.0145 12.3859 11.2202C9.9859 11.1002 7.84304 9.95165 6.42018 8.20308C6.18018 8.63165 6.0259 9.12879 6.0259 9.66022C6.0259 10.6545 6.54018 11.5459 7.31161 12.0602C6.83161 12.0602 6.3859 11.9231 6.00875 11.7002V11.7345C6.00875 13.1402 7.00304 14.3059 8.32304 14.5802C8.08304 14.6488 7.8259 14.6831 7.56875 14.6831C7.38018 14.6831 7.20875 14.6659 7.02018 14.6316C7.38018 15.7802 8.46018 16.6202 9.71161 16.6374C8.71732 17.4088 7.4659 17.8716 6.11161 17.8716C5.87161 17.8716 5.64875 17.8716 5.4259 17.8374C6.69447 18.6602 8.22018 19.1402 9.84875 19.1402"
                              fill="#0B0A0A"
                              fillOpacity="0.5"
                            />
                          </svg>
                        </a>
                        <a className="ms-1" href="#">
                          <svg
                            width="25"
                            height="25"
                            viewBox="0 0 25 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12.0602 0.797363C5.43615 0.797363 0.0601501 6.17336 0.0601501 12.7974C0.0601501 19.4214 5.43615 24.7974 12.0602 24.7974C18.6842 24.7974 24.0602 19.4214 24.0602 12.7974C24.0602 6.17336 18.6842 0.797363 12.0602 0.797363ZM17.6282 8.95736C17.4482 10.8534 16.6682 15.4614 16.2722 17.5854C16.1042 18.4854 15.7682 18.7854 15.4562 18.8214C14.7602 18.8814 14.2322 18.3654 13.5602 17.9214C12.5042 17.2254 11.9042 16.7934 10.8842 16.1214C9.69615 15.3414 10.4642 14.9094 11.1482 14.2134C11.3282 14.0334 14.4002 11.2374 14.4602 10.9854C14.4685 10.9472 14.4674 10.9076 14.4569 10.8699C14.4465 10.8323 14.427 10.7978 14.4002 10.7694C14.3282 10.7094 14.2322 10.7334 14.1482 10.7454C14.0402 10.7694 12.3602 11.8854 9.08415 14.0934C8.60415 14.4174 8.17215 14.5854 7.78815 14.5734C7.35615 14.5614 6.54015 14.3334 5.92815 14.1294C5.17215 13.8894 4.58415 13.7574 4.63215 13.3374C4.65615 13.1214 4.95615 12.9054 5.52015 12.6774C9.02415 11.1534 11.3522 10.1454 12.5162 9.66536C15.8522 8.27336 16.5362 8.03336 16.9922 8.03336C17.0882 8.03336 17.3162 8.05736 17.4602 8.17736C17.5802 8.27336 17.6161 8.40536 17.6282 8.50136C17.6161 8.57336 17.6402 8.78936 17.6282 8.95736Z"
                              fill="#0B0A0A"
                              fillOpacity="0.5"
                            />
                          </svg>
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-5 mt-md-0 mt-5">
                <div className="row justify-content-md-end justify-content-between">
                  <div className="col-xl-5 col-6">
                    <h3 className="ff_futura fw-normal fs_sm text_dark_black">
                      Quick links
                    </h3>
                    <div className="d-flex  flex-column gap-2">
                      <span className="mt-1">
                        <a
                          className="hover_effact_link ff_futura fw-normal fs_sm text_dark_black op07"
                          href="#"
                        >
                          Home
                        </a>
                      </span>
                      <span className="mt-1">
                        <a
                          className="hover_effact_link ff_futura fw-normal fs_sm text_dark_black op07"
                          href="#"
                        >
                          Features
                        </a>
                      </span>
                      <span className="mt-1">
                        <a
                          className="hover_effact_link ff_futura fw-normal fs_sm text_dark_black op07"
                          href="#"
                        >
                          Marketplace
                        </a>
                      </span>
                      <span className="mt-1">
                        <a
                          className="hover_effact_link ff_futura fw-normal fs_sm text_dark_black op07"
                          href="#"
                        >
                          Tokens
                        </a>
                      </span>
                      <span className="mt-1">
                        <a
                          className="hover_effact_link ff_futura fw-normal fs_sm text_dark_black op07"
                          href="#"
                        >
                          NexChat
                        </a>
                      </span>
                      <span className="mt-1">
                        <a
                          className="hover_effact_link ff_futura fw-normal fs_sm text_dark_black op07"
                          href="#"
                        >
                          About
                        </a>
                      </span>
                    </div>
                  </div>
                  <div className="col-xl-4 col-4">
                    <h3 className="ff_futura fw-normal fs_sm text_dark_black">
                      Information's
                    </h3>
                    <div className="d-flex  flex-column gap-2">
                      <span className="mt-1">
                        <a
                          className="hover_effact_link ff_futura fw-normal fs_sm text_dark_black op07"
                          href="#"
                        >
                          Contact
                        </a>
                      </span>
                      <span className="mt-1">
                        <a
                          className="hover_effact_link ff_futura fw-normal fs_sm text_dark_black op07"
                          href="#"
                        >
                          Phone
                        </a>
                      </span>
                      <span className="mt-1">
                        <a
                          className="hover_effact_link ff_futura fw-normal fs_sm text_dark_black op07"
                          href="#"
                        >
                          terms
                        </a>
                      </span>
                      <span className="mt-1">
                        <a
                          className="hover_effact_link ff_futura fw-normal fs_sm text_dark_black op07"
                          href="#"
                        >
                          Privacy
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border-top text-center">
            <p className="peragraph_common mb-0 pt-2 mt-1 text_dark_black">
              @Copyright.nexai
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
