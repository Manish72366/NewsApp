// just enter rcep for class based component.
import PropTypes from 'prop-types'
import React from 'react' // {component} used in class based
import {
  Link,
} from "react-router-dom";
// href = "#" ko use mt kro href = "/" use karo
// to="" will link to the same page as the one you are currently on, effectively refreshing the page. to="#" will not refresh the page, but using the # will make the screen move to the top of the page (it is the browser effectively looking for an anchor with no name, )
const  Navbar = () =>  {
  // this is not defined in normal function only defined in arrow functions.
   const changeClr = (event) => {
    // here belo getElementsByClassName("nav-link") gives you an array like object so we have to traverse each.
    const links = document.getElementsByClassName("nav-link"); // getting all the elements having class nav-link
    for (let i = 0; i < links.length; i++) {
      links[i].classList.remove("active"); // removing active bootstrap class from all.
    }
      event.target.classList.add("active"); // give active class to the event wale ko.
  }
    return (
        <>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark ">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/" style={{color : 'rgba(25,135,84)'}}><b>NewsTiger</b></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/home"  onClick={changeClr}>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/business"   onClick={changeClr} >business</Link></li>
              <li className="nav-item">
                <Link className="nav-link" to="/entertainment"   onClick={changeClr}>entertainment</Link></li>
              <li className="nav-item">
                <Link className="nav-link" to="/general"  onClick={changeClr} >general</Link></li>
              <li className="nav-item">
                <Link className="nav-link" to="/health"   onClick={changeClr} >health</Link></li>
              <li className="nav-item">
                <Link className="nav-link" to="/science"  onClick={changeClr}>science</Link></li>
              <li className="nav-item">
                <Link className="nav-link" to="/sports"  onClick={changeClr} >sports</Link></li>
              <li className="nav-item">
                <Link className="nav-link " to="/technology"  onClick={changeClr} >technology</Link></li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
      </>
    )
}

export default Navbar