import React from "react";
//import "./SideNav.css";
import icon2 from "../../assets/img/icons/employees.png";
import icon1 from "../../assets/img/icons/Form.png";
import "./sideNav.scss";
import { Link } from "react-router-dom";
function SideNav() {
  return (
    <>
      <div className="main-nav">
        <div className="menu">
          <Link to="/"><div className="icon">
              {" "}
              <img alt="Form Page " src={icon1}></img>
            </div></Link>
         <Link to="/allEmployees"><div className="icon">
              <img alt="employees page " src={icon2}></img>
            </div></Link>
        
        </div>
        <div className="copy-write">
          <p>&copy; {new Date().getFullYear()} HRNET </p>
        </div>
      </div>
    </>
  );
}

export default SideNav;
