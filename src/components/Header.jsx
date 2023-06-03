import React, { useState } from "react";
import logo from "../assets/img/svg/logo.svg";
import { Link } from "react-router-dom";

function Header(props) {
  const [navShow, setNavShow] = useState(false);
  if (navShow) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "initial";
  }
  return (
    <section id="header" className="w-100">
      <nav
        data-aos="fade-down"
        data-aos-offset="0"
        data-aos-duration="1000"
        data-aos-delay="2500"
        className="shadow_nav z_index2 position-relative"
      >
        <div className="container ">
          <div className="d-flex justify-content-between align-items-center pt-sm-4 py-3">
            <ul className="mb-0 p-0">
              <Link to="/">
                <img className="logo_size" src={logo} alt="LOGO-ICON" />
              </Link>
            </ul>

            <div
              className={
                navShow
                  ? "threeline d-md-none cursor_pointer "
                  : "threeline d-md-none cursor_pointer "
              }
              onClick={() => setNavShow(!navShow)}
            >
              <div
                className={navShow ? " falseline1" : "  threelinechild"}
              ></div>
              <div className={navShow ? "falseline" : " threelinechild"}></div>
              <div className={navShow ? "falseline3 " : "threelinechild"}></div>
            </div>
            <ul className="mb-0 p-0 d-flex gap-4 d-none d-md-flex me-lg-5 pe-lg-4">
              <li>
                <div className="dropdown transition300 cursor_pointer">
                  <span
                    className={`ff_Manrope fw-normal fs_lg text-center
                      clr_LightBlack op08 nav_tab cursor_point ${props.borderBottomDolce} position-relative`}
                  >
                    About
                    <svg
                      className="ms-2"
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.00192 4.22573L7.00112 7.22493L10.0003 4.22573C10.0719 4.15416 10.1568 4.0974 10.2504 4.05867C10.3439 4.01994 10.4441 4 10.5453 4C10.6465 4 10.7467 4.01994 10.8402 4.05867C10.9337 4.0974 11.0187 4.15416 11.0902 4.22573C11.1618 4.29729 11.2186 4.38225 11.2573 4.47576C11.296 4.56926 11.316 4.66948 11.316 4.77069C11.316 4.87189 11.296 4.97211 11.2573 5.06562C11.2186 5.15912 11.1618 5.24408 11.0902 5.31564L7.54222 8.86367C7.4707 8.93532 7.38576 8.99218 7.29225 9.03097C7.19874 9.06976 7.0985 9.08972 6.99726 9.08972C6.89602 9.08972 6.79578 9.06976 6.70227 9.03097C6.60876 8.99218 6.52381 8.93532 6.4523 8.86367L2.90428 5.31564C2.83262 5.24413 2.77577 5.15919 2.73698 5.06568C2.69819 4.97217 2.67822 4.87192 2.67822 4.77069C2.67822 4.66945 2.69819 4.56921 2.73698 4.4757C2.77577 4.38218 2.83262 4.29724 2.90428 4.22573C3.20574 3.93199 3.70046 3.92426 4.00192 4.22573Z"
                        fill="#2C2C2C"
                      />
                    </svg>
                  </span>
                  <div
                    class="dropdown-content fs_sm transition300 bg_main py-2"
                    style={{ zIndex: "123" }}
                  >
                    <Link to="/Dolce">
                      <span
                        className={`ff_Manrope fw-normal fs_lg
                      clr_LightBlack op08 nav_tab cursor_point position-relative py-1`}
                      >
                        {" "}
                        Marie Dolce
                      </span>
                    </Link>
                    <Link to="/Payment">
                      <span
                        className={`ff_Manrope fw-normal fs_lg
                      clr_LightBlack op08 nav_tab cursor_point position-relative py-1 mt-1`}
                      >
                        Payment
                      </span>
                    </Link>
                  </div>
                </div>
              </li>
              <li className="ms-lg-4">
                <Link
                  to="/Review"
                  className={`ff_Manrope fw-normal fs_lg text-center
                      clr_LightBlack op08 nav_tab cursor_point ${props.borderBottomReview} position-relative`}
                >
                  Reviews
                </Link>
              </li>
              <li className="ms-lg-4">
                <Link
                  to="/Contact"
                  className={`ff_Manrope fw-normal fs_lg text-center
                      clr_LightBlack op08 nav_tab cursor_point ${props.borderBottomContact} position-relative`}
                  href="#"
                >
                  Contact
                </Link>
              </li>
            </ul>
            <ul className="d-flex gap-1 mb-0 p-0 mb-0 d-none d-md-flex">
              <a
                href="tel:424-666-9958"
                className="ff_jakarta fw-semibold clr_white fs_md bt_commn transition300"
              >
                424-666-9958
              </a>
            </ul>
          </div>
          <div
            className={
              navShow
                ? "shownav d-flex flex-column justify-content-center align-items-center"
                : "hidenav d-flex flex-column justify-content-center align-items-center"
            }
          >
            <ul className="mb-0 p-0 d-flex gap-4 flex-column justify-content-center align-items-center">
              {" "}
              <li>
                <div className="dropdown transition300 cursor_pointer">
                  <span
                    className={`ff_Manrope fw-normal fs_lg text-center
                      clr_LightBlack op08 nav_tab cursor_point ${props.borderBottomDolce} position-relative`}
                  >
                    About
                    <svg
                      className="ms-2"
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.00192 4.22573L7.00112 7.22493L10.0003 4.22573C10.0719 4.15416 10.1568 4.0974 10.2504 4.05867C10.3439 4.01994 10.4441 4 10.5453 4C10.6465 4 10.7467 4.01994 10.8402 4.05867C10.9337 4.0974 11.0187 4.15416 11.0902 4.22573C11.1618 4.29729 11.2186 4.38225 11.2573 4.47576C11.296 4.56926 11.316 4.66948 11.316 4.77069C11.316 4.87189 11.296 4.97211 11.2573 5.06562C11.2186 5.15912 11.1618 5.24408 11.0902 5.31564L7.54222 8.86367C7.4707 8.93532 7.38576 8.99218 7.29225 9.03097C7.19874 9.06976 7.0985 9.08972 6.99726 9.08972C6.89602 9.08972 6.79578 9.06976 6.70227 9.03097C6.60876 8.99218 6.52381 8.93532 6.4523 8.86367L2.90428 5.31564C2.83262 5.24413 2.77577 5.15919 2.73698 5.06568C2.69819 4.97217 2.67822 4.87192 2.67822 4.77069C2.67822 4.66945 2.69819 4.56921 2.73698 4.4757C2.77577 4.38218 2.83262 4.29724 2.90428 4.22573C3.20574 3.93199 3.70046 3.92426 4.00192 4.22573Z"
                        fill="#2C2C2C"
                      />
                    </svg>
                  </span>
                  <div
                    class="dropdown-content fs_sm transition300 bg_main py-2"
                    style={{ zIndex: "123" }}
                  >
                    <Link to="/Dolce">
                      <span
                        className={`ff_Manrope fw-normal fs_lg
                      clr_LightBlack op08 nav_tab cursor_point position-relative py-1`}
                      >
                        {" "}
                        Marie Dolce
                      </span>
                    </Link>
                    <Link to="/Payment">
                      <span
                        className={`ff_Manrope fw-normal fs_lg
                      clr_LightBlack op08 nav_tab cursor_point position-relative py-1 mt-1`}
                      >
                        Payment
                      </span>
                    </Link>
                  </div>
                </div>
              </li>
              <li>
                <Link
                  onClick={() => setNavShow(!navShow)}
                  to="/Review"
                  className="ff_Manrope fw-normal fs_lg text-center clr_LightBlack op08 nav_tab"
                >
                  Reviews
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setNavShow(!navShow)}
                  to="/Contact"
                  className="ff_Manrope fw-normal fs_lg text-center clr_LightBlack op08 nav_tab"
                  href="#"
                >
                  Contact
                </Link>
              </li>
            </ul>
            <ul className="d-flex gap-1 mb-0 p-0 mb-0 justify-content-center align-items-center mt-4">
              <a
                href="tel:424-666-9958"
                onClick={() => setNavShow(!navShow)}
                className="ff_jakarta fw-semibold clr_white fs_md bt_commn"
              >
                424-666-9958
              </a>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
}

export default Header;
