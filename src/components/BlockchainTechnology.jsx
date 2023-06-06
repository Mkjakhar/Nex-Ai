import React, { useEffect, useRef } from "react";
import Earth from "../assets/img/svg/BlockChain--Earth-Center.svg";
import Shinewave_img__BLockCahin from "../assets/img/svg/Wave__Shine.svg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Canvas, useThree, extend, useFrame } from "react-three-fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import * as THREE from "three";
import earthTexture from "../assets/img/png/globe1.png"; // Import the Earth texture image
extend({ OrbitControls });
function Globe() {
  const globeRef = useRef();
  useFrame(() => {
    const globe = globeRef.current;
    if (globe) {
      globe.rotation.y += 0.005; // Rotate the globe slowly
    }
  });



  return (
    <mesh ref={globeRef}>
      <sphereBufferGeometry args={[1.5, 64, 64]} />
      <meshStandardMaterial
        map={new THREE.TextureLoader().load(earthTexture)}
      />
    </mesh>
  );
}

function Controls() {
  const { camera, gl } = useThree();
  const controlsRef = useRef();

  useEffect(() => {
    const controls = controlsRef.current;
    controls.enableZoom = false; // Disable default zoom behavior
    controls.addEventListener("wheel", handleWheel); // Add scroll event listener
    return () => {
      controls.removeEventListener("wheel", handleWheel); // Clean up event listener on unmount
    };
  }, []);

  const handleWheel = (event) => {
    const controls = controlsRef.current;
    const deltaY = event.deltaY;
    const zoomSpeed = 0.1;
    controls.zoomSpeed = zoomSpeed;
    controls.zoom += deltaY * controls.zoomSpeed;
    controls.update();
  };

  useFrame(() => {
    controlsRef.current.update();
  });

  return <orbitControls ref={controlsRef} args={[camera, gl.domElement]} />;
}


function BlockchainTechnology() {

  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    setTimeout(() => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".Shinewave_img__BLockCahin",
            start: "top 40%",
            end: "bottom top",
            // markers: true,
          },
        })
        .fromTo(
          ".blockcahinHEading",
          {
            overflow: "hidden",
             
            opacity: 0,
          },
          {
            
            opacity: 1,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.9"
        )
        .fromTo(
          ".blockcahinPara",
          {
            overflow: "hidden",
            y: "-100%",
            opacity: 0,
          },
          {
            y: "0%",
            opacity: 1,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.9"
        )
        .fromTo(
          ".box_blockchain_pos1",
          {
            overflow: "hidden",
            scale:0,
            opacity: 0,
          },
          {
            scale:1,
            opacity: 1,
            duration: 1, 
            ease: "power3.out",
          },
          "-=0.5"
        )
        .fromTo(
          ".box_blockchain_pos2",
          {
            overflow: "hidden",
            scale:0,
            opacity: 0,
          },
          {
            scale:1,
            opacity: 1,
            duration: 1, 
            ease: "power3.out",
          },
          "-=0.5"
        )
        .fromTo(
          ".box_blockchain_pos3",
          {
            overflow: "hidden",
            scale:0,
            opacity: 0,
          },
          {
            scale:1,
            opacity: 1,
            duration: 1, 
            ease: "power3.out",
          },
          "-=0.5"
        )
        .fromTo(
          ".box_blockchain_pos4",
          {
            overflow: "hidden",
            scale:0,
            opacity: 0,
          },
          {
            scale:1,
            opacity: 1,
            duration: 1,
            stagger: 1,
            ease: "power3.out",
          },
          "-=0.5"
        )
        .fromTo(
          ".ImgEarth",
          {
            overflow: "hidden",
            scale:0,
            opacity: 0,
            rotation: 180,
          },
          {
            rotation: 0,
            scale:1,
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
   
      <section className="py-5 bg_blue  position-relative overflow-hidden">
        <img
          className="Shinewave_img__BLockCahin position-absolute z_index1"
          src={Shinewave_img__BLockCahin}
          alt=""
        />


        <div className="container position-relative z_index3 pb-5">
          <div className="pt-lg-5">
            <h2 className="heading_common text-center text_light_white blockcahinHEading">
              Blockchain & AI technology
            </h2>
            <p className="text_light_white op07 peragraph_common text-center blockcahinPara">
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
                  Transparent and Reliable Data Management
                </h3>
              </div>
              <div
                style={{ minHeight: "105px" }}
                className="box_blockchain_pos4 d-none  position-absolute text-center d-sm-inline-block px-md-4 px-3 py-4 ">
                <h3 className="mb-0 ff_futura fs_2x4l fw-normal text_light_white ">
                  Automated & Transparent Transactions
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
              {/* <div className="d-flex  justify-content-center">
                <img className=" " src={Earth} alt="" />
              </div> */}
              <Canvas
      className="ImgEarth "
      style={{ height: "100vh" }}
      camera={{ position: [0, 0, 3] }}
    >
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Globe />
      <Controls />
    </Canvas>
              <div className="d-flex flex-column justify-content-center gap-3 mt-4 d-sm-none">
                <div
                  style={{ minHeight: "90px" }}
                  className="box_blockchain_pos3 d-sm-none d-flex align-items-center justify-content-center  text-center mx-auto px-md-4 px-3 py-3 ">
                  <h3 className="mb-0 ff_futura fs_2x4l fw-normal text_light_white ">
                    Transparent and Reliable Data Management
                  </h3>
                </div>
                <div
                  style={{ minHeight: "90px" }}
                  className="box_blockchain_pos4 d-sm-none d-flex align-items-center justify-content-center   text-center mx-auto px-md-4 px-3 py-3 ">
                  <h3 className="mb-0 ff_futura fs_2x4l fw-normal text_light_white ">
                    Automated & Transparent Transactions
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
