import React from "react";
import "./Message.scss";


/**
 * 
 * A customizable message component 
 */
function Message({ messageText, subMessageText }) {
  return (
    <>
    
        <h3 className="message">{messageText}</h3>
        <p className="sub-message">{subMessageText}</p>
      </>
   
  );
}

export default Message;
