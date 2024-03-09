import React from "react";
import Carousel from "./carousel";
import Availables from "./Available";
import "./Home.css";
import Amenities from "./amenities";
import About from "./about";


const Home = () => {
  return (
    <div className="container">
      <div className="section1">
        <div>
          <h1 style={{fontSize:"25px"}}>Smash Badminton Academy</h1>
          <div>
            <span style={{fontSize:"13px"}}>Bhimavaram</span>
          </div>
        </div>
        <Carousel />
        <div className="button-container2">
          <button><a href="https://wa.me/message/63CIAW324QBMK1">Book Now</a></button>
          <button>Share</button>
        </div>
        <div className="amenities">
        <h3>Timing</h3>
        <div style={{display:"flex",justifyContent:"space-between"}}>
          <h5>Morning</h5>
          <p>5am - 10am</p>
        </div>
        <div style={{display:"flex",justifyContent:"space-between"}}>
          <h5>Evening</h5>
          <p>4pm - 10pm</p>
        </div>
        </div>
        <Availables/>
        <Amenities/>
        <About/>
      </div>
      <div className="section2">
        <div className="button-container">
          <button><a href="https://wa.me/message/63CIAW324QBMK1">Book Now</a></button>
          <button>Share</button>
        </div>
        <div>
          <h3>Location</h3>
          <p> Bhupathiraju Ramurthy Raju Nagar, Mentay Vari Thota, Bhimavaram, Kumudavalli, Andhra Pradesh 534201</p>
          <div className="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3824.4493871231825!2d81.53132137388535!3d16.553872526284017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37cdedc9ffc779%3A0x43b78b96d005ad75!2sSmash%20Badminton%20Academy!5e0!3m2!1sen!2sin!4v1709792863860!5m2!1sen!2sin" width="100%" height="100%" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
