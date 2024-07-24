import React from "react";
import { Link } from "react-router-dom";
import "./Pagenav.scss";

const Pagenav = ({ navData, color }) => {
  console.log(navData);
  const style = {
    // color: `${color==="black"?'--blackColor':'#fff'}`,
    // backgroundColor: `${color==="black"?'--blackColor':'--whiteColo'}`,
    '--textColor':color
  };
  console.log("CHECKING ",navData[0],"   ",navData[0].work==="Work"?'/Work':'/');
  console.log(style.color+"  "+style.backgroundColor);
  return (
    <div className="page-nav">
      {Object.entries(navData).map((item,key) => {
        return (
          <div className="page-nav-item" key={key}>
            <Link to={`${item[1].work==="Work"?'/Work':'/'}`} className={`page-nav-link`} style={style} >
              {item[1].work}
            </Link>
          </div>
        );
      })}
      <div className="page-nav-line" style={style}></div>
      <div className="page-nav-item nav-copyright">
        <div className="copyright" style={style}>
          @/2023
        </div>
      </div>
    </div>
  );
};

export default Pagenav;
