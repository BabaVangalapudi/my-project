import './landing.css'
import { Link } from 'react-router-dom';

function Landing() {
    return(
        <div className='landing-screen'>
            <div className='anim-typewriter line-1'>
                <div className='hero'><span>Smash</span>
                <span>Badminton</span>
                <span>Academy</span></div>
            </div>
            <Link to="/home"><button className='explore-btn'>Explore</button></Link>
            {/* <button>Explore</button> */}
        </div>
    )
}

export default Landing;