import React from 'react'
import PropTypes from 'prop-types'
// import {Link} from 'react-router-dom'



export default function Navbar(props) {
  return (
    <>

   <nav className={`navbar navbar-expand-lg navbar-${props.mode==="light"?"light":"dark"} bg-${props.mode} p-4 `}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.Navbar}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          {/* <Link className="nav-link active" aria-current="page" to="/">{props.Home}</Link> */}
          <a className="nav-link active" aria-current="page" hrefh="/">{props.Home}</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/about">{props.About}</a>
        </li>
       
       
      </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-primary" type="submit">Search</button>
      </form> */}
      <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" role="switch" id="switchCheckDefault" onClick={props.toggle}/>
  <label className={`form-check-label text-${props.mode==='light'?'dark':'light'} HtmlFor="switchCheckDefault`}>Enable {props.mode==="light"?"dark":"light"}</label>
</div>
    </div>
  </div>
</nav>
    </>
  )
}


 // prop-types
Navbar.propTypes = {
  Navbar: PropTypes.string,
  About: PropTypes.string
}

// default prop
Navbar.defaultProps = {
  Navbar: 'zech',
  About: 'about'   // fixed typo
}

