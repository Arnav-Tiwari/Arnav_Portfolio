import React, { useContext, useEffect, useState } from "react";
import WorkContext from "../Context/WorkContext";
import work_data from "./workdata";
import Pagenav from "../Nav/Pagenav";
import "./workDisplay.scss";
import { gsap } from "gsap";
const navData = [{ work: "Work" }];
const WorkDisplay = () => {
  const { id } = useContext(WorkContext);
  console.log("ID IS ", id);
  console.log("WORKING DATA IS ", work_data);
  const desc = Object.entries(work_data).filter((itm) => {
    console.log(itm);
    console.log("ITMS IS ",itm[1].name, "   ", id);
    if (itm[1].name === id) {
      return itm[1];
    }
  })[0][1];


  console.log("DESC ", desc);
  const width=window.innerWidth;
  console.log("width ",width);
  const height=width<=760?"80%":"90%";
  console.log("HEIGHT ANIM ",height);
  const animateOverlay = () => {
    console.log("INSIDE Animate Overlay");
    const tl = gsap.timeline();
    tl.to(".overlay", {
      height: "90%",
      duration: 1,
      ease: "expo.inOut",
      // onComplete: complete,
    }).to(
      ".overlay-title-heading",
      {
        y: 0,
        duration: 1.5,
        ease: "expo.inOut",
      },
      0.3
    );
  };
  useEffect(() => {
    animateOverlay();
  }, []);

  return (
    <>
      {console.log("WIDTH ",window.innerWidth)}
      <div className="workDisplay-container">
        <Pagenav navData={navData} color={"#1a1919"} />
        <div className="workDisplay-overlay-container">
          <div className="overlay">
            <div className="overlay-title">
              <div className="overlay-title-wraper">
                <h1 className="overlay-title-heading">{desc.name}</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="work-description">
          <div className="description">{desc.description}</div>
          <div className="description">-{desc.techStack}</div>
          <br />
          <br />
          <br />
          {/* <table className="task-wrapper">
            <thead>
              <tr>
                <th className="task-header">Role</th>
                <th className="task-header">Responsibility</th>
                <th className="task-header">URL</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="task">{desc.role}</td>
                <td className="task">{desc.responsiblity}</td>
                <td className="task">{desc.url}</td>
              </tr>
            </tbody>
          </table> */}
          <div className="task-wrapper">
            <div className="task-content-wrapper">
              <div className="task-header">ROLE</div>
              <div className="task">{desc.role}</div>
            </div>
            <div className="task-content-wrapper">
              <div className="task-header">Reponsibility</div>
              <div className="task">{desc.responsiblity}</div>
            </div>
            <div className="task-content-wrapper">
              <div className="task-header">URL</div>
              <div className="task"><a href={desc.url} target="_blank">{desc.url}</a></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkDisplay;
