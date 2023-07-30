import './App.css';

// rcc -> react class based component 
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
// previously we made textUtils on the basis of function based component and now this one have class based component as you can see below is the class based component.
// render () renders all the html css whatever present there.
export default class App extends Component {
  m = "manish";
  render() {
    return (
      <>
       <Navbar/>
       <News/>
       </>
    )
  }
}


// Your API key is: 5f3863ab0e294d3a89c3097826ba64bb