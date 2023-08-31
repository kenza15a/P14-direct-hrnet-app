import React from "react";
//import "./SideNav.css";
import icon2 from "../../assets/img/icons/employees.png";
import icon1 from "../../assets/img/icons/Form.png";
import "./sideNav.scss";
function SideNav() {
  return (
    <>
      <div className="main-nav">
        <div className="menu">
          <a href="/">
            <div className="icon">
              {" "}
              <img alt="Form Page " src={icon1}></img>
            </div>
          </a>
          <a href="/allEmployees">
            <div className="icon">
              {" "}
              <img alt="employees page " src={icon2}></img>
            </div>
          </a>
        </div>
        <div className="copy-write">
          <p>&copy; {new Date().getFullYear()} HRNET </p>
        </div>
      </div>
    </>
  );
}

export default SideNav;
