import React from "react";
import "./NotAvailable.css";

import SideNav from "../../Components/SideNav/SideNav";
import Message from "../../Components/Message/Message";
function NotAvailable() {
  return (
    <>
      <div className="app-container">
        <SideNav />
        <div className="message-container">
          <div className="message">
          <Message messageText={"Page not available 🙁"}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default NotAvailable;
