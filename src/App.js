import './App.css';
import './index.css';
// rcc -> react class based component 
import React, { Component } from 'react'
import LoadingBar from 'react-top-loading-bar'
import Navbar from './components/Navbar';
import News from './components/News';
// previously we made textUtils on the basis of function based component and now this one have class based component as you can see below is the class based component.
// render () renders all the html css whatever present there.
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
export default class App extends Component {
  state = {
    progress : 0
  }
  setProgress = (progress) =>
  {
    this.setState({progress : progress})
  }
  pageSize = 20;
  apiKey = process.env.REACT_APP_NEWS_API;
  render() {
    return (
       <BrowserRouter>
       <Navbar/>
       <LoadingBar
        height={3}
        color='rgb(0, 219, 0)'
        progress={this.state.progress} />
          <Routes>
            {/* key = "science" to match the component as we gave unique id. as you can see whole time only same component (news) is remount so react thing if you not provide key that i already mount a component why i have to remount other same component (news)  so key (unique id) is necessary this is force mount*/}
            <Route path="*" element={<Navigate to="/home"/>} /> {/*making home as by default page redirecting all other paths to home also */}
            <Route exact path="/science" element={<News setProgress={this.setProgress} apiKey = {this.apiKey} key = "science" pageSize={this.pageSize} country= "in" category = "science"  />} />
            <Route exact path="/home" element={<News setProgress={this.setProgress} apiKey = {this.apiKey}  key = "general" pageSize={this.pageSize} country= "in" category = "general" />} />
            <Route exact path="/general" element={<News setProgress={this.setProgress} apiKey = {this.apiKey}  key = "general" pageSize={this.pageSize} country= "in" category = "general" />} />
            <Route exact path="/technology" element={<News setProgress={this.setProgress} apiKey = {this.apiKey} key = "technology" pageSize={this.pageSize} country= "in" category = "technology" />} />
            <Route exact path="/sports" element={<News setProgress={this.setProgress} apiKey = {this.apiKey} key = "sports" pageSize={this.pageSize} country= "in" category = "sports" />} />
            <Route exact path="/health" element={<News setProgress={this.setProgress} apiKey = {this.apiKey} key = "health" pageSize={this.pageSize} country= "in" category = "health" />} />
            <Route exact path="/business" element={<News setProgress={this.setProgress} apiKey = {this.apiKey} key = "business" pageSize={this.pageSize} country= "in" category = "business" />} />
            <Route exact path="/entertainment" element={<News setProgress={this.setProgress} apiKey = {this.apiKey} key = "entertainment" pageSize={this.pageSize} country= "in" category = "entertainment" />} />
            <Route exact path="/health" element={<News setProgress={this.setProgress} apiKey = {this.apiKey} key = "health" pageSize={this.pageSize} country= "in" category = "health" />} />
          </Routes>
       </BrowserRouter>
    )
  }
}


// Your API key is: 5f3863ab0e294d3a89c3097826ba64bb
// https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=5f3863ab0e294d3a89c3097826ba64bb put this so then you can see the api result for news.
// &q=cricket add this so then you can specific find api for a specific query video number 24 