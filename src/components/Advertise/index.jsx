import React, { useState } from "react";
import "./index.css";

const Popup = () => {
  // const popupDismissed = localStorage.getItem("popupDismissed");

  const [showPopup, setShowPopup] = useState(true);

  const handleClosePopup = () => {
    setShowPopup(false);
    // localStorage.setItem("popupDismissed", "true");
  };

  if (!showPopup) {
    return null;
  }

  return (
    <div className="popup-container">
      <div className="popup">
        <img
          className="close-icon"
          src="./cross.svg"
          alt=""
          onClick={handleClosePopup}
        />
        <h2>Summer Camp Started</h2>
        <p>Make a call and Book your slot</p>
        <button>
            <a href="tel:+917569767096">Make a Call</a>
          </button>
      </div>
    </div>
  );
};

export default Popup;
