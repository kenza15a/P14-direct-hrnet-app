import React from "react";
import "./MessageModal.scss";
function MessageModal({
  isOpen,
  message,
  closeFunction,
  buttonFunction,
  buttonText,
}) {
  if (!isOpen) return null;

  return (
    <>
      <div className="modal-overlay" onClick={closeFunction}>
        <div className="modal" onClick={(e) => e.stopPropagation()}>
          <div className="modal-content">
            <span className="close" onClick={closeFunction}>
              &times;
            </span>
            <div className="modal-main-content">
              <h4 className="modal-message">{message}</h4>
              <button className="modal-confirmation" onClick={buttonFunction}>
                {buttonText}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MessageModal;
