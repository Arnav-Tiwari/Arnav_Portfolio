import gsap from "gsap";
import React, { useEffect, useState } from "react";
import "./Overlay.scss";


const Overlay = ({ animate, setAnimate ,doAnimation}) => {
  useEffect(() => {
    doAnimation();
  });
  return (
    <div className="overlay-wrapper">
      {!animate ? <div className="overlay"></div> : <></>}
      {/* <div className="content">This content is the Hidden one</div> */}
    </div>
  );
};

export default Overlay;
