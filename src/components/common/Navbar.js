import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Nav = () => {

  const location = useLocation()

  useEffect(() => {
  }, [location.pathname])

  return (
    <nav className="navbar navbar-expand-sm justify-content-between">
      <div className="container-fluid">
        <div className="nav navbar-nav mb-1 mb-lg-0">
          <Link to="/" className="nav-link">home</Link>
        </div>
        <div className="navbar-nav mb-1 mb-lg-0">
          <Link to="/bio" className="nav-link">bio</Link>
        </div>
        <div className="navbar-nav mb-1 mb-lg-0">
          <Link to="/coaching" className="nav-link">coaching</Link>
        </div>
        <div className="navbar-nav mb-1 mb-lg-0">
          <Link to="/stringing" className="nav-link">stringing</Link>
        </div>
        <div className="navbar-nav mb-1 mb-lg-0">
          <Link to="/altcontact" className="nav-link">
            contact
            <img 
            src="https://res.cloudinary.com/yl/image/upload/v1692280241/Badminton/IMG_20181020_222950_864_jlpkxn.jpg" 
            alt="navimg" 
            className="navimg" 
            />
          </Link>
        </div>
      </div>
    </nav>
  )

}

export default Nav