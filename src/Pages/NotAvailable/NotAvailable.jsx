import React from "react";
import "./NotAvailable.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
function NotAvailable() {
  return (
    <>
      <Header />
      <div className="message-container">
        <div className="message">
      Not available page 
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default NotAvailable;
