import React, { useState } from "react";
import "./index.css";

const Popup = () => {
  const [showPopup, setShowPopup] = useState(true);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  if (!showPopup) {
    return null;
  }

  return (
    <div className="popup-container">
      <div className="popup">
        <h2>Tournament is happening</h2>
        <p>Click on explore for full details</p>
        <button onClick={handleClosePopup}>Explore</button>
      </div>
    </div>
  );
};

export default Popup;
