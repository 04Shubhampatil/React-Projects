import React from 'react'
import PropTypes from 'prop-types'

// Navbar component definition
export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        {/* Brand name displayed in the navbar */}
        <a className="navbar-brand" href="/">{props.title}</a>
        
        {/* Button for toggling the navbar on smaller screens */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        
        {/* Collapsible part of the navbar */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {/* Home link */}
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            {/* About link */}
            <li className="nav-item">
              <a className="nav-link" href="/">{props.aboutText}</a>
            </li>
          </ul>
          
          {/* Search form */}
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  )
}

// Prop types for Navbar component
Navbar.propTypes = {
  title: PropTypes.string.isRequired, // Title prop is required and should be a string
  aboutText: PropTypes.string.isRequired // About text prop is required and should be a string
}

// Default props for Navbar component
Navbar.defaultProps = {
  title: 'Textutil', // Default title if none is provided
  aboutText: 'About' // Default about text if none is provided
}