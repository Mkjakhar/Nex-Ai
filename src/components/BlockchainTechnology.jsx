import React from "react";
import Earth from "../assets/img/svg/BlockChain--Earth-Center.svg";

function BlockchainTechnology() {
  return (
    <>
      {" "}
      <section className=" py-5 bg_blue BlockChainBox">
        {" "}
        <div className=" container">
          <div className="pt-lg-5">
            <h2 className=" heading_common text-center text_light_white">
              {" "}
              Blockchain & AI technology
            </h2>
            <p className=" text_light_white op07 peragraph_common text-center">
              By building the software on blockchain, Nexai provides the
              following advantages
            </p>
            <div className="pt-3 mt-3 position-relative ">
              <div
                style={{ minHeight: "105px" }}
                className="box_blockchain_pos1 d-none  d-flex align-items-center position-absolute text-center d-sm-flex px-md-4 px-3 py-4 ">
                <h3 className="mb-0 ff_futura fs_2x4l fw-normal text_light_white  ">
                  Security and Privacy
                </h3>
              </div>
              <div
                style={{ minHeight: "105px" }}
                className="box_blockchain_pos2 d-none  position-absolute text-center d-sm-inline-block px-md-4 px-3 py-4 ">
                <h3 className="mb-0 ff_futura fs_2x4l fw-normal text_light_white  ">
                  Self-learning and Personalization
                </h3>
              </div>
              <div
                style={{ minHeight: "105px" }}
                className="box_blockchain_pos3 d-none  position-absolute text-center d-sm-inline-block px-md-4 px-3 py-4 ">
                <h3 className="mb-0 ff_futura fs_2x4l fw-normal text_light_white ">
                  Transparent and Reliable Data Management{" "}
                </h3>
              </div>
              <div
                style={{ minHeight: "105px" }}
                className="box_blockchain_pos4 d-none  position-absolute text-center d-sm-inline-block px-md-4 px-3 py-4 ">
                <h3 className="mb-0 ff_futura fs_2x4l fw-normal text_light_white ">
                  Automated & Transparent Transactions{" "}
                </h3>
              </div>
              <div className="d-flex flex-column justify-content-center mb-4 gap-3 d-sm-none">
                <div
                  style={{ minHeight: "90px" }}
                  className="box_blockchain_pos1  d-flex align-items-center justify-content-center  text-center d-sm-none px-md-4 px-3 py-3 mx-auto ">
                  <h3 className="mb-0 ff_futura fs_2x4l fw-normal text_light_white  ">
                    Security and Privacy
                  </h3>
                </div>
                <div
                  style={{ minHeight: "90px" }}
                  className="box_blockchain_pos2 d-flex align-items-center justify-content-center  text-center d-sm-none px-md-4 px-3 py-4 mx-auto ">
                  <h3 className="mb-0 ff_futura fs_2x4l fw-normal text_light_white  ">
                    Self-learning and Personalization
                  </h3>
                </div>
              </div>
              <div className=" d-flex  justify-content-center">
                <img className="ImgEarth " src={Earth} alt="" />
              </div>{" "}
              <div className="d-flex flex-column justify-content-center gap-3 mt-4 d-sm-none">
                <div
                  style={{ minHeight: "90px" }}
                  className="box_blockchain_pos3 d-sm-none d-flex align-items-center justify-content-center  text-center mx-auto px-md-4 px-3 py-3 ">
                  <h3 className="mb-0 ff_futura fs_2x4l fw-normal text_light_white ">
                    Transparent and Reliable Data Management{" "}
                  </h3>
                </div>
                <div
                  style={{ minHeight: "90px" }}
                  className="box_blockchain_pos4 d-sm-none d-flex align-items-center justify-content-center   text-center mx-auto px-md-4 px-3 py-3 ">
                  <h3 className="mb-0 ff_futura fs_2x4l fw-normal text_light_white ">
                    Automated & Transparent Transactions{" "}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default BlockchainTechnology;
