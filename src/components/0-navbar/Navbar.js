import './navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div className='navbar-container'>
            <div className="navbar-wrapper">
                <div className="navbar-box-1">
                    <img src="https://uploads-ssl.webflow.com/61e5e860ca5ccbb4eb1ea806/61e5ed555d407d7655bf649a_unwrap_logo.png" alt="Unwrap.Ai Logo" />
                </div>
                <div className="navbar-box-2">
                    <Link to="/">
                        <div className="navbar-clst-link-box">
                            <h1>Clustered</h1>
                        </div>
                    </Link>
                    <Link to="/unclustered">
                        <div className="navbar-unclst-link-box">
                            <h1>Unclustered</h1>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar