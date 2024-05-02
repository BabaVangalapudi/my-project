import './index.css'

const ScrollingText = () => {
    return (
      <div className="scrolling-text-container">
        <marquee behavior="scroll" direction="left">
          Tournament is happening, slots are less
        </marquee>
      </div>
    );
};
export default ScrollingText;