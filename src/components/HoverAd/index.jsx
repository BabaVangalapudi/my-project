import { useState, useEffect } from "react";

const HoverAd = ({ isHovered, isClosed, onMouseEnter, onMouseLeave, onCloseClick, children }) => {
    const [adContent, setAdContent] = useState(null); // Placeholder for your ad content
  
    useEffect(() => {
      // Fetch or generate ad content here
      setAdContent(<p>This is the ad content!</p>); // Example content
    }, []); // Run only once to fetch/generate ad content
  
    const hoverCardStyles = {
      position: 'fixed', // Ensures card stays in viewport on scroll
      top: '50%', // Center vertically
      left: '50%', // Center horizontally
      transform: 'translate(-50%, -50%)', // Adjust positioning based on content size
      width: '300px', // Adjust width as needed
      height: '200px', // Adjust height as needed
      padding: '20px',
      backgroundColor: 'white',
      border: '1px solid #ddd',
      borderRadius: '5px',
      boxShadow: isHovered ? '0px 0px 10px rgba(0, 0, 0, 0.3)' : 'none', // Add box-shadow on hover
      transition: 'opacity 0.2s ease-in-out', // Add smooth opacity transition
      opacity: isHovered && !isClosed ? 1 : 0, // Control visibility based on hover and closed state
      zIndex: 10, // Ensure card appears above other elements
    };
  
    return (
      <div
        className={`hover-card ${isClosed ? 'hover-card--closed' : ''}`} // Optional CSS class for closed state
        style={hoverCardStyles}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {adContent && (
          <>
            {children} {/* Pass any additional content from parent component */}
            <button onClick={onCloseClick}>Close</button>
          </>
        )}
      </div>
    );
};
export default HoverAd