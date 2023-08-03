import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Spinner from './Spinner-5.gif'
export class spinner extends Component {

  render() {
    return (
      <div>
        <div className="container text-center">
           <img className= "my-3" src={Spinner} alt="Abe sun na"/>
        </div>
      </div>
    )
  }
}

export default spinner
