import React from "react";
import "./Homenav.scss";
const Leftnav = () => {
  const f = () => {
    console.log("CLICKED");
  };
  return (
    <div className="left-nav">
      <div className="left-nav-item">
        <a href="https://leetcode.com/Arnav_Tiwari/" target="_blank" className="left-nav-link">
          LC
        </a>
      </div>
      <div className="left-nav-item">
        <a
          href="https://github.com/Arnav-Tiwari"
          target="_blank"
          className="left-nav-link"
          onClick={() => f()}
        >
          GH
        </a>
      </div>
      <div className="left-nav-item">
        <a href="https://www.hackerrank.com/arnavtiwari100?hr_r=1" target="_blank" className="left-nav-link">
          HR
        </a>
      </div>
      {/* <div className="left-nav-item">
        <a href="" className="left-nav-link">
          CF
        </a>
      </div> */}
      <div className="left-nav-line"></div>
      <div className="left-nav-item nav-copyright">
        <div className="copyright">@/2023</div>
      </div>
    </div>
  );
};

export default Leftnav;
