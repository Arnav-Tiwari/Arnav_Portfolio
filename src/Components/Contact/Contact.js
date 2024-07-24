import gsap from "gsap";
import React, { useEffect } from "react";
import Pagenav from "../Nav/Pagenav";
import "./Contact.scss";
const navData = [{ work: "Home" }];
const Contact = () => {
  const animate = { bottom: "100%", duration: 0.8, ease: "expo.in" };
  const doAnimate = () => {
    console.log("RUNNING");
    const tl = gsap.timeline();

    tl.to(".contact-overlay", animate)

      .to(
        ".contact-link",
        {
          y: 0,
          duration: 1,
          ease: "expo.inOut",
        },
        1
      )
      .to(
        ".description",
        {
          y: 0,
          duration: 1,
          ease: "expo.inOut",
        },
        1
      )
      .to(
        ".header",
        {
          y: 0,
          duration: 1,
          ease: "expo.inOut",
        },
        1.5
      );
  };

  const doAnimateMailOverlay = () => {
    console.log("Something is DONE");
    const tl = gsap.timeline();
    tl.to(".mail-overlay", animate);
  };

  useEffect(() => {
    doAnimate();
  }, []);
  return (
    <div className="contact">
      <Pagenav navData={navData} color={"white"} />
      <div className="contact-overlay"></div>
      <div className="contact-wrapper">
        <div className="section-left">
          <div className="header-mask">
            <h1 className="header">HELLO.</h1>
          </div>
          <div className="description-mask">
            <p className="description">
              I am open to exploring new opportunities and working with
              companies.Feel free to contact me.
            </p>
          </div>
          <div className="description-mask">
            <p className="contact-link">
              Email: <a href="">arnavtiwari100@gmail.com</a>
            </p>
          </div>
          <div className="description-mask">
            <p className="contact-link">
              On the Internet:{" "}
              <a href="https://www.linkedin.com/in/arnav-tiwari-0b73a41a5/">
                LinkedIn
              </a>
              / <a href="https://leetcode.com/Arnav_Tiwari/">LeetCode</a>/{" "}
              <a href="https://github.com/Arnav-Tiwari">GitHub</a>
            </p>
          </div>
        </div>
        {/* <div className="section-right">
          <div className="contact-form" onClick={doAnimateMailOverlay}>
            <div className="mail-overlay"></div>
            Something
          </div>
        </div> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default Contact;
