import './index.css'

const ScrollingText = () => {
    return (
      <div className="scrolling-text-container">
        <marquee behavior="scroll" direction="left">
          Summer camp is started, Book your slots Now!!!!
        </marquee>
      </div>
    );
};
export default ScrollingText;