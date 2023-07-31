// just enter rcep
import PropTypes from 'prop-types'
import React, { Component } from 'react'
// href = "#" ko use mt kro href = "/" use karo
// href="" will link to the same page as the one you are currently on, effectively refreshing the page. href="#" will not refresh the page, but using the # will make the screen move to the top of the page (it is the browser effectively looking for an anchor with no name, )
export class Navbar extends Component {
  static propTypes = {}

  render() {
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/" style={{color : 'darkgreen'}}>NewsTiger</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/" style={{color : 'darkgreen'}}>Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/"  style={{color : 'darkgreen'}}>About</a>
              </li>
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