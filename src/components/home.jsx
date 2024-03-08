import React from "react";
import Carousel from "./carousel";
import ModalButton from './ModalButton'
import "./Home.css";


const Home = () => {
  const availableData = [{
    id: 1,
    image: "data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgNjYgNjYiIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIDAgNjYgNjYiIHdpZHRoPSI1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGc+PGc+PHBhdGggZD0ibTYwLjYgMTkuOWMtLjctMS42LTIuNi0yLjQtNC4zLTEuNmwtMjguMSAxMi43LTUuNy05LjljLS42LTEtMS42LTEuNi0yLjgtMS42LS4zIDAtLjUgMC0uNy4xbC0zLjQtNi4xYzItMS42IDIuOC01LjIgMS04LjUtMS45LTMuMi01LjYtNS4xLTguNy0zLjRzLTMuNSA1LjktMS44IDkuMWMxLjMgMi40IDMuNyA0IDYuMSA0IC41IDAgMS4xLS4xIDEuNi0uMmwzLjQgNi4yYy0uOSAxLTEgMi41LS4zIDMuN2w3LjEgMTIuNGMuOCAxLjQgMi42IDIgNC4xIDEuM2w1LjQtMi40IDQgMTEtMi40IDQuOS03LjkgNy4xYy0xLjUgMS40LTEuNiAzLjctLjIgNS4yczMuNyAxLjYgNS4yLjJsOC40LTcuNmMuNC0uMy42LS43LjgtMS4xbDMuMy03IDYuMiAyLjJ2MTAuNWMwIDIgMS42IDMuNyAzLjcgMy43czMuNy0xLjYgMy43LTMuN3YtMTMuMWMwLTEuNS0xLTIuOS0yLjQtMy41bC02LjUtMi4zLTQuMy0xMS44IDEzLjktNi4zYzEuNi0uNyAyLjQtMi42IDEuNi00LjJ6Ii8+PHBhdGggZD0ibTI0LjQgOS45Yy40IDAgLjYtLjEuOS0uMWwtLjgtNS45LS42LjFjLTEuNi4yLTIuNyAxLjgtMi41IDMuNC4zIDEuNCAxLjUgMi41IDMgMi41eiIvPjxwYXRoIGQ9Im0zMS4zIDEwLjRjLjguMSAxLjQtLjYgMS4xLTEuM2wtMS02LjhjLS4xLS43LS44LTEuMS0xLjQtLjdsLTMuNiAxLjguOSA2LjR6Ii8+PHBhdGggZD0ibTI4LjMgMTkuOWMwIDMuMSAyLjYgNS43IDUuNyA1LjdzNS43LTIuNSA1LjctNS43YzAtMy4xLTIuNS01LjctNS43LTUuNy0zLjEgMC01LjcgMi41LTUuNyA1Ljd6Ii8+PC9nPjwvZz48L3N2Zz4=",
    name: "Book N Play"
  },
  {
    id: 2,
    image: "data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgNjYgNjYiIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIDAgNjYgNjYiIHdpZHRoPSI1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGc+PGc+PHBhdGggZD0ibTYwLjYgMTkuOWMtLjctMS42LTIuNi0yLjQtNC4zLTEuNmwtMjguMSAxMi43LTUuNy05LjljLS42LTEtMS42LTEuNi0yLjgtMS42LS4zIDAtLjUgMC0uNy4xbC0zLjQtNi4xYzItMS42IDIuOC01LjIgMS04LjUtMS45LTMuMi01LjYtNS4xLTguNy0zLjRzLTMuNSA1LjktMS44IDkuMWMxLjMgMi40IDMuNyA0IDYuMSA0IC41IDAgMS4xLS4xIDEuNi0uMmwzLjQgNi4yYy0uOSAxLTEgMi41LS4zIDMuN2w3LjEgMTIuNGMuOCAxLjQgMi42IDIgNC4xIDEuM2w1LjQtMi40IDQgMTEtMi40IDQuOS03LjkgNy4xYy0xLjUgMS40LTEuNiAzLjctLjIgNS4yczMuNyAxLjYgNS4yLjJsOC40LTcuNmMuNC0uMy42LS43LjgtMS4xbDMuMy03IDYuMiAyLjJ2MTAuNWMwIDIgMS42IDMuNyAzLjcgMy43czMuNy0xLjYgMy43LTMuN3YtMTMuMWMwLTEuNS0xLTIuOS0yLjQtMy41bC02LjUtMi4zLTQuMy0xMS44IDEzLjktNi4zYzEuNi0uNyAyLjQtMi42IDEuNi00LjJ6Ii8+PHBhdGggZD0ibTI0LjQgOS45Yy40IDAgLjYtLjEuOS0uMWwtLjgtNS45LS42LjFjLTEuNi4yLTIuNyAxLjgtMi41IDMuNC4zIDEuNCAxLjUgMi41IDMgMi41eiIvPjxwYXRoIGQ9Im0zMS4zIDEwLjRjLjguMSAxLjQtLjYgMS4xLTEuM2wtMS02LjhjLS4xLS43LS44LTEuMS0xLjQtLjdsLTMuNiAxLjguOSA2LjR6Ii8+PHBhdGggZD0ibTI4LjMgMTkuOWMwIDMuMSAyLjYgNS43IDUuNyA1LjdzNS43LTIuNSA1LjctNS43YzAtMy4xLTIuNS01LjctNS43LTUuNy0zLjEgMC01LjcgMi41LTUuNyA1Ljd6Ii8+PC9nPjwvZz48L3N2Zz4=",
    name: "Membership"
  },
  {
    id: 3,
    image: "data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgNjYgNjYiIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIDAgNjYgNjYiIHdpZHRoPSI1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGc+PGc+PHBhdGggZD0ibTYwLjYgMTkuOWMtLjctMS42LTIuNi0yLjQtNC4zLTEuNmwtMjguMSAxMi43LTUuNy05LjljLS42LTEtMS42LTEuNi0yLjgtMS42LS4zIDAtLjUgMC0uNy4xbC0zLjQtNi4xYzItMS42IDIuOC01LjIgMS04LjUtMS45LTMuMi01LjYtNS4xLTguNy0zLjRzLTMuNSA1LjktMS44IDkuMWMxLjMgMi40IDMuNyA0IDYuMSA0IC41IDAgMS4xLS4xIDEuNi0uMmwzLjQgNi4yYy0uOSAxLTEgMi41LS4zIDMuN2w3LjEgMTIuNGMuOCAxLjQgMi42IDIgNC4xIDEuM2w1LjQtMi40IDQgMTEtMi40IDQuOS03LjkgNy4xYy0xLjUgMS40LTEuNiAzLjctLjIgNS4yczMuNyAxLjYgNS4yLjJsOC40LTcuNmMuNC0uMy42LS43LjgtMS4xbDMuMy03IDYuMiAyLjJ2MTAuNWMwIDIgMS42IDMuNyAzLjcgMy43czMuNy0xLjYgMy43LTMuN3YtMTMuMWMwLTEuNS0xLTIuOS0yLjQtMy41bC02LjUtMi4zLTQuMy0xMS44IDEzLjktNi4zYzEuNi0uNyAyLjQtMi42IDEuNi00LjJ6Ii8+PHBhdGggZD0ibTI0LjQgOS45Yy40IDAgLjYtLjEuOS0uMWwtLjgtNS45LS42LjFjLTEuNi4yLTIuNyAxLjgtMi41IDMuNC4zIDEuNCAxLjUgMi41IDMgMi41eiIvPjxwYXRoIGQ9Im0zMS4zIDEwLjRjLjguMSAxLjQtLjYgMS4xLTEuM2wtMS02LjhjLS4xLS43LS44LTEuMS0xLjQtLjdsLTMuNiAxLjguOSA2LjR6Ii8+PHBhdGggZD0ibTI4LjMgMTkuOWMwIDMuMSAyLjYgNS43IDUuNyA1LjdzNS43LTIuNSA1LjctNS43YzAtMy4xLTIuNS01LjctNS43LTUuNy0zLjEgMC01LjcgMi41LTUuNyA1Ljd6Ii8+PC9nPjwvZz48L3N2Zz4=",
    name: "Coaching"
  }]
  const amenitiesData = [{
    id: 1,
    name: "Parking"
  },
  {
    id: 1,
    name: "Changing Rooms"
  },
  {
    id: 1,
    name: "Washrooms"
  },
  {
    id: 1,
    name: "Shoes and Racquets can be rented"
  }]
  return (
    <div className="container">
      <div className="section1">
        <div>
          <h1 className="herohead">Smash Badminton Academy</h1>
          <div>
            <span className="loaction">Bhimavaram</span>
          </div>
        </div>
        <Carousel />
        <div className="amenities">
          <h3>Availables</h3>
          <div className="available">
            {
              availableData.map((each) => (<ModalButton key={each.id} userData={each} />)
              )
            }
          </div>
        </div>
        <div className="amenities">
          <h3>Amenities</h3>
          <div className="amenities-list">
            {
              amenitiesData.map((each) => (
                <div key={each.id} className="each">
                  <img className="icon-amenities" src="data:image/svg+xml;base64,PHN2ZyBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGZpbGwtcnVsZT0iZXZlbm9kZCIgaW1hZ2UtcmVuZGVyaW5nPSJvcHRpbWl6ZVF1YWxpdHkiIHNoYXBlLXJlbmRlcmluZz0iZ2VvbWV0cmljUHJlY2lzaW9uIiB0ZXh0LXJlbmRlcmluZz0iZ2VvbWV0cmljUHJlY2lzaW9uIiB2aWV3Qm94PSIwIDAgMjEuMDAwMSAyMS4wMDAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIGlkPSImI3g1NkZFOyYjeDVDNDI7X3gwMDIwXzEiPjxwYXRoIGQ9Im0wIDBoMjF2MjFoLTIxeiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Im0xMC41MDM4IDEuMzE3NzVjNS4wNzMyOCAwIDkuMTg3NiA0LjExNDMyIDkuMTg3NiA5LjE4NzZzLTQuMTE0MzIgOS4xODc2LTkuMTg3NiA5LjE4NzYtOS4xODc2LTQuMTE0MzItOS4xODc2LTkuMTg3NiA0LjExNDMyLTkuMTg3NiA5LjE4NzYtOS4xODc2em0tMS45MDc5MiAxMi4xNzE4LTIuMjQ5MzUtMi4yNTEyMWMtLjM4MzIxLS4zODM0NC0uMzgzMjktMS4wMDg3MiAwLTEuMzkyMDguMzgzMzctLjM4MzI5IDEuMDExNDMtLjM4MDg5IDEuMzkyMDEgMGwxLjU4NTc4IDEuNTg3MDIgMy45NDQ4OC0zLjk0NDg4Yy4zODMzNy0uMzgzMzcgMS4wMDg3Mi0uMzgzMzcgMS4zOTIwMSAwIC4zODMzNy4zODMyOS4zODI4MiAxLjAwOTE4IDAgMS4zOTIwMWwtNC42NDIwMSA0LjY0MjAxYy0uMzgyODIuMzgyODItMS4wMDg3Mi4zODMzNy0xLjM5MjAxIDAtLjAxMDc3LS4wMTA3Ny0uMDIxMTYtLjAyMTctLjAzMTMxLS4wMzI4NnoiIGZpbGw9IiMwMGJhMDAiLz48L2c+PC9zdmc+" alt="icon3" />
                  <span>{each.name}</span>
                </div>
              ))
            }
          </div>
        </div>
        <div className="amenities">
          <h3>About Venue</h3>
          <ul className="about-list">
            <li>Maximum of 6 people can be allowed to play on one court</li>
            <li>Non marking shoes are mandatory</li>
            <li>Racquets, nylon shuttle & non marking shoes can be rented</li>
          </ul>
        </div>
      </div>
      <div className="section2">
        <div className="button-container">
          <a href="https://wa.me/message/63CIAW324QBMK1"><button>Book Now</button></a>
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
