import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Nav = () => {

  const location = useLocation()

  useEffect(() => {
  }, [location.pathname])

  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light justify-content-between bb-3 ">
      <div className="container-fluid">
        <div className="navbar-header">
          <Link to="/" className="navbar-brand">home</Link>
        </div>
        <div className="nav navbar-nav mb-1 mb-lg-0">
          <Link to="/" className="navbar-brand">bio</Link>
        </div>
        <div className="nav navbar-nav mb-1 mb-lg-0">
          <Link to="/" className="navbar-brand">coaching</Link>
        </div>
        <div className="nav navbar-nav mb-1 mb-lg-0">
          <Link to="/" className="navbar-brand">contact</Link>
        </div>
      </div>
    </nav>
  )

}

export default Nav