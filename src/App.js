import './App.css';
import './index.css';
// rcc -> react class based component 
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
// previously we made textUtils on the basis of function based component and now this one have class based component as you can see below is the class based component.
// render () renders all the html css whatever present there.
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
export default class App extends Component {
  m = "manish";
  render() {
    return (
       <BrowserRouter>
       <Navbar/>
          <Routes>
            {/* key = "science" to match the component as we gave unique id. as you can see whole time only same component (news) is remount so react thing if you not provide key that i already mount a component why i have to remount other same component (news)  so key (unique id) is necessary this is force mount*/}
            <Route exact path="/science" element={<News key = "science" pageSize={20} country= "in" category = "science" />} />
            <Route exact path="/home" element={<News  key = "general" pageSize={20} country= "in" category = "general" />} />
            <Route exact path="/general" element={<News  key = "general" pageSize={20} country= "in" category = "general" />} />
            <Route exact path="/technology" element={<News key = "technology" pageSize={20} country= "in" category = "technology" />} />
            <Route exact path="/sports" element={<News key = "sports" pageSize={20} country= "in" category = "sports" />} />
            <Route exact path="/health" element={<News key = "health" pageSize={20} country= "in" category = "health" />} />
            <Route exact path="/business" element={<News key = "business" pageSize={20} country= "in" category = "business" />} />
            <Route exact path="/entertainment" element={<News key = "entertainment" pageSize={20} country= "in" category = "entertainment" />} />
            <Route exact path="/health" element={<News key = "health" pageSize={20} country= "in" category = "health" />} />
          </Routes>
       </BrowserRouter>
    )
  }
}


// Your API key is: 5f3863ab0e294d3a89c3097826ba64bb
// https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=5f3863ab0e294d3a89c3097826ba64bb put this so then you can see the api result for news.
// &q=cricket add this so then you can specific find api for a specific query video number 24 