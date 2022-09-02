import React, { useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

export default function Navbar(props) {
  
  let navigation = useNavigate();
  const handleClick = () => {
    localStorage.removeItem('token');
    navigation('/login');
    props.showAlert("Log Out Successfully","success")
  }

  let location = useLocation();
  // useEffect(() => {
  //   console.log(location.pathname);
  // }, [location]);


  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="#">Navbar</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to="/about">About</Link>
            </li>
          </ul>
          <form className="d-flex w-50" role="search">
            <input className="form-control me-2 w-50" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-primary" type="submit">Search</button>
          </form>
          {!localStorage.getItem('token') ? <form className="d-flex">
            <Link className="btn btn-primary mx-2" to="/login" role="button">Login</Link>
            <Link className="btn btn-primary mx-2" to="/signup" role="button">Signup</Link>
          </form> : <button className="btn btn-primary mx-2" onClick={handleClick} role="button">LogOut</button>}
        </div>
      </div>
    </nav>
  )
}
