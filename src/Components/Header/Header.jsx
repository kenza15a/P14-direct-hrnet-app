import React from "react";
import "./Header.scss";
/**
 * The page tile component
 * @param {String} title 
 * @returns 
 */
function Header({ title }) {
  return (
    <>
     <div className="title">{title}</div>
  
     
    </>
  );
}

export default Header;
