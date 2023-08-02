// just enter rcep
import { useState, useEffect } from "react";
import { hover } from '@testing-library/user-event/dist/hover'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {
  Link,
} from "react-router-dom";
// href = "#" ko use mt kro href = "/" use karo
// to="" will link to the same page as the one you are currently on, effectively refreshing the page. to="#" will not refresh the page, but using the # will make the screen move to the top of the page (it is the browser effectively looking for an anchor with no name, )
export class Navbar extends Component {
  
  // this is not defined in normal function only defined in arrow functions.
  changeClr = (event) => {
    // here belo getElementsByClassName("nav-link") gives you an array like object so we have to traverse each.
    const links = document.getElementsByClassName("nav-link"); // getting all the elements having class nav-link
    for (let i = 0; i < links.length; i++) {
      links[i].classList.remove("active"); // removing active bootstrap class from all.
    }
    event.target.classList.add("active"); // give active class to the event wale ko.
  }
  
  render() {
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/" style={{color : 'rgb(0 ,129 ,0)'}}><b>NewsTiger</b></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/home"  onClick={this.changeClr}>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/business"   onClick={this.changeClr} >business</Link></li>
              <li className="nav-item">
                <Link className="nav-link" to="/entertainment"   onClick={this.changeClr}>entertainment</Link></li>
              <li className="nav-item">
                <Link className="nav-link" to="/general"  onClick={this.changeClr} >general</Link></li>
              <li className="nav-item">
                <Link className="nav-link" to="/health"   onClick={this.changeClr} >health</Link></li>
              <li className="nav-item">
                <Link className="nav-link" to="/science"  onClick={this.changeClr}>science</Link></li>
              <li className="nav-item">
                <Link className="nav-link" to="/sports"  onClick={this.changeClr} >sports</Link></li>
              <li className="nav-item">
                <Link className="nav-link " to="/technology"  onClick={this.changeClr} >technology</Link></li>
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
}

export default Navbar