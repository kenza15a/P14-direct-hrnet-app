import React from "react";
import "./NotAvailable.css";

import SideNav from "../../Components/SideNav/SideNav";
function NotAvailable() {
  return (
    <>
      <div className="app-container">
        <SideNav />
        <div className="message-container">
          <div className="message">Not available page</div>
        </div>
      </div>
    </>
  );
}

export default NotAvailable;
