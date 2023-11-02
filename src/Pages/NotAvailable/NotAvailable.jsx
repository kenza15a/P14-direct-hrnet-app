import React from "react";
import "./NotAvailable.scss";

import SideNav from "../../Components/SideNav/SideNav";
import Message from "../../Components/Message/Message";
import { Link } from "react-router-dom";
function NotAvailable() {
  return (
    <>
      <div className="app-container">
        <SideNav />
        <div className="message-container">
          <div className="message">
            <Message messageText={"OUPS! PAGE NOT AVAILABLE 🙁"} />
            <Link to="/">GO Back to HomePage</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default NotAvailable;
