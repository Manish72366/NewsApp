import './App.css';

// rcc -> react class based component 
import React, { Component } from 'react'
// previously we made textUtils on the basis of function based component and now this one have class based component as you can see below is the class based component.
export default class App extends Component {
  m = "manish";
  render() {
    return (
      <div>App is working fine {this.m}</div>
    )
  }
}


// Your API key is: 5f3863ab0e294d3a89c3097826ba64bb