import React, { useState } from "react";
import "./index.css";

const Popup = () => {
  const popupDismissed = localStorage.getItem("popupDismissed");

  const [showPopup, setShowPopup] = useState(!popupDismissed);

  const handleClosePopup = () => {
    setShowPopup(false);
    localStorage.setItem("popupDismissed", "true");
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
        <h2>Tournament is happening</h2>
        <p>Click on explore for full details</p>
        <button>Explore</button>
      </div>
    </div>
  );
};

export default Popup;
