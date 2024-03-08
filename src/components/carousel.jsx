// Carousel.js

import React, { useState,useEffect } from 'react';
import { useSpring, animated } from 'react-spring';

const slides = [
  { id: 1, url:"",alt:"one" },
  { id: 2, url:"",alt:"two" },
  { id: 3, url:"",alt:"three"},
  // Add more slides as needed
];

const Carousel = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 3000); 

    return () => clearInterval(intervalId); 
  }, [index]);


  const props = useSpring({
    transform: `translateX(-${index * 100}%)`,
  });

  return (
    <div style={{ overflow: 'hidden', width: '100%', position: 'relative' }}>
      <animated.div style={{ display: 'flex', width: `${slides.length * 100}%`, ...props }}>
        {slides.map((slide) => (
          <div key={slide.id} style={{ flex: '0 0 100%', boxSizing: 'border-box' }}>
            <img src={slide.url} alt={slide.alt} />
          </div>
        ))}
        <div key={slides.length + 1} style={{ flex: '0 0 100%', boxSizing: 'border-box' }}>
          <img src={slides[0].url} alt={slides[0].alt} />
        </div>
      </animated.div>
    </div>
  );
};

export default Carousel;
