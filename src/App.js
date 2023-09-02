import './App.css';
import './index.css';
// rcc -> react class based component 
import React, {useState,useEffect } from 'react'
import LoadingBar from 'react-top-loading-bar'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
const  App = () => {
  const [progress , setProgress] = useState(0);
  const pageSize = 20;
  const apiKey = process.env.REACT_APP_NEWS_API;
    return (
       <BrowserRouter>
       <Navbar/>
       <LoadingBar
        height={3}
        color='rgb(0, 219, 0)'
        progress={progress} />
          <Routes>
            <Route path="*" element={<Navigate to="/home"/>} /> {/*making home as by default page redirecting all other paths to home also */}
            <Route exact path="/science" element={<News setProgress={setProgress} apiKey = {apiKey} key = "science" pageSize={pageSize} country= "in" category = "science"  />} />
            <Route exact path="/home" element={<News setProgress={setProgress} apiKey = {apiKey}  key = "general" pageSize={pageSize} country= "in" category = "general" />} />
            <Route exact path="/general" element={<News setProgress={setProgress} apiKey = {apiKey}  key = "general" pageSize={pageSize} country= "in" category = "general" />} />
            <Route exact path="/technology" element={<News setProgress={setProgress} apiKey = {apiKey} key = "technology" pageSize={pageSize} country= "in" category = "technology" />} />
            <Route exact path="/sports" element={<News setProgress={setProgress} apiKey = {apiKey} key = "sports" pageSize={pageSize} country= "in" category = "sports" />} />
            <Route exact path="/health" element={<News setProgress={setProgress} apiKey = {apiKey} key = "health" pageSize={pageSize} country= "in" category = "health" />} />
            <Route exact path="/business" element={<News setProgress={setProgress} apiKey = {apiKey} key = "business" pageSize={pageSize} country= "in" category = "business" />} />
            <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey = {apiKey} key = "entertainment" pageSize={pageSize} country= "in" category = "entertainment" />} />
            <Route exact path="/health" element={<News setProgress={setProgress} apiKey = {apiKey} key = "health" pageSize={pageSize} country= "in" category = "health" />} />
          </Routes>
       </BrowserRouter>
    )
}

export default App;
// Your API key is: 5f3863ab0e294d3a89c3097826ba64bb
// https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=5f3863ab0e294d3a89c3097826ba64bb put this so then you can see the api result for news.
// &q=cricket add this so then you can specific find api for a specific query video number 24 