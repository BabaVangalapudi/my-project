import './landing.css'
import { Link } from 'react-router-dom';

function Landing() {
    return(
        <div className='landing-screen'>
            <h1 className='anim-typewriter line-1'>Smash Badminton Academy</h1>
            <Link to="/home"><button>Explore</button></Link>
            {/* <button>Explore</button> */}
        </div>
    )
}

export default Landing;