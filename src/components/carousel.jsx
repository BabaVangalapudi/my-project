import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none"}}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none"}}
      onClick={onClick}
    />
  );
}

function LazyLoad() {
  const settings = {
    dots: false,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="carousel-width">
      <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img className="carousel-image" src="https://i.ibb.co/28k0MDY/Screenshot-20240309-153838-Instagram.jpg" alt="1" />
        </div>
        <div>
          <img className="carousel-image" src="https://i.ibb.co/xgVPgyW/Screenshot-20240309-153817-Instagram.jpg" alt="2" />
        </div>
        <div>
          <img className="carousel-image" src="https://i.ibb.co/kJHVgJf/Screenshot-20240309-153807-Instagram.jpg" alt="3" />
        </div>
      </Slider>
    </div>
    </div>
  );
}

export default LazyLoad;
