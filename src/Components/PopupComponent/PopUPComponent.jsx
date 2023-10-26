import React from "react";
import "./PopUPComponent.scss";
function PopUPComponent({
  isOpen,
  contentComponent,
  closeFunction,
}) {
  if (!isOpen) {
    console.log("Popup is not open.");
    return null;
  }

  return (
    <>
      <div className="popup-overlay" onClick={closeFunction}>
        {/*close the modal when i click outside */}
        <div className="modal" onClick={(e) => e.stopPropagation()}>
          {/*to stop the closing event when i click inside the modal */}
          <div className="modal-content">
            <span className="close" onClick={closeFunction}>
              &times;
            </span>
            <div className="modal-main-content">
              {contentComponent}
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PopUPComponent;
