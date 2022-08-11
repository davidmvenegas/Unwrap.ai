import './navbar.css'
import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import LogoImage from '../../assets/logo.png'

function Navbar() {
    const location = useLocation()
    const linkParam = location.pathname.split("/").at(-1)
    const [isActive, setIsActive] = useState(true)

    useEffect(() => {
        if (linkParam !== '') setIsActive(false)
    }, [linkParam])

    return (
        <div className='navbar-container'>
            <div className="navbar-wrapper">
                <div className="navbar-box-1">
                    <img src={LogoImage} alt="Unwrap.Ai Logo" />
                </div>
                <div className="navbar-box-2">
                    <Link className='nav-link' to="/">
                        <h1 style={{color: isActive ? "#E06080" : "#FFFFFF", fontSize: isActive ? "2.5rem" : "1.8rem"}}>Clustered</h1>
                    </Link>
                    <Link className='nav-link' to="/unclustered">
                        <h1 style={{color: isActive ? "#FFFFFF" : "#E06080", fontSize: isActive ? "1.8rem" : "2.5rem"}}>Unclustered</h1>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar