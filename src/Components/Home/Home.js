import React, { useEffect, useState } from "react";
import Leftnav from "../Nav/Homenav.js";
import Overlay from "../OverlayEffect/Overlay.js";
import "./Home.scss";
import gsap from "gsap";
import { Link } from "react-router-dom";

const Home = () => {
  const [animate, setAnimate] = useState(false);
  const complete = () => {
    setAnimate(true);
  };
  const AnimateBlur = () => {
    console.log("Animate blur is called");
    const tl = gsap.timeline();
    tl.to(
      ".nav-link",
      {
        filter: "blur(0px)",
        duration: 1,
      },
      0.7
    )
      .to(
        ".header",
        {
          y: 0,
          duration: 0.4,
        },
        0.7
      )
      .to(
        ".d-mask",
        {
          y: 0,
          duration: 0.4,
          // delay: 0.2,
          ease: "power2.out",
        },
        0.7
      );
  };
  const doAnimation = () => {
    // const tl = gsap.timeline();
    gsap.to(".overlay", {
      // height: 0,
      top: "100%",
      duration: 1,
      ease: "expo.inOut",
      onComplete: complete,
    });
  };
  useEffect(() => {
    console.log("use Effect ran");
    doAnimation();
    // debugger
    AnimateBlur();
  }, [animate]);
  return (
    <div className="home">
      <div className="overlay"></div>
      <Leftnav />
      <div className="home-wrapper">
        <div className="section-left">
          <div className="content">
            <div className="header-mask">
              <h1 className="header">Arnav Tiwari</h1>
            </div>
            <div className="description-mask">
              <p className="d-mask"> I am a Java backend developer with experience in designing and building scalable server-side applications using Core Java and Spring Boot.</p>
            </div>
            <div className="description-mask">
              <p className="d-mask">
              Currently working as Software Design Engineer @Newgen Software 
              </p>
            </div>
          </div>
        </div>
        <div className="section-right">
          <div className="home-nav">
            <div className="home-nav-item">
              <Link to="/work" className="nav-link">
                WORK
              </Link>
            </div>
            <div className="home-nav-item">
              <Link to="/about" className="nav-link">
                ABOUT
              </Link>
            </div>
            <div className="home-nav-item">
              <Link to="/contact" className="nav-link">
                CONTACT
              </Link>
            </div>
          </div>
        </div>
        {/* <div><h1>HELLO</h1></div> */}
      </div>
    </div>
  );
};

export default Home;
