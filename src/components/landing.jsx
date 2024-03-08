import './landing.css'
import { Link } from 'react-router-dom';

function Landing() {
    return(
        <div className='landing-screen'>
            <div className='contain'>
                <div className='hero'><span>Smash</span>
                <span>Badminton</span>
                <span>Academy</span></div>
                <Link to="/home"><button className='explore-btn'>Explore</button></Link>
            </div>
        </div>
    )
}

export default Landing;