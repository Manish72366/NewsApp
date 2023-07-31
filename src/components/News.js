import PropTypes from "prop-types";
import React, { Component } from "react";
import NewsItem from "./NewsItem";
export class News extends Component {
  constructor(){
    super();// without this webpage will show you an error.
    console.log("Hello i am a constructor");
    // this below is the state in the class.
    this.state = {
      //  articles : this.articles, // as we are using fetch API
      articles : [],
      loading : false,
      page : 1
    }
  }
  // componentDidMount helps us to fetch updated data.
  async componentDidMount(){
    console.log("Mai sabse baad mai run honga .mai use hora hu kunki mujshe hamesa current news milengi API se fetch krne ke baad");
    let url = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=5f3863ab0e294d3a89c3097826ba64bb";
    let data = await fetch(url); // wait while whole url will not fetch .
    console.log(data); // Response from fetched url
    // The .json() method of the Response interface takes a Response stream and reads it to completion. It returns a promise which resolves with the result of parsing the body text as JSON .
    let parsedData = await data.json(); // Data parsing is converting data from one format to another. here converting to a json file.
    console.log(parsedData);
    this.setState (
      {
        articles : parsedData.articles, // parsedData is similiar to sampleOutput.json and there articles key we need becz it has array of objects
        totalResults : parsedData.totalResults
      }
    )
  }
  handleNextClick = async () =>
  {
      let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=5f3863ab0e294d3a89c3097826ba64bb&page=${this.state.page + 1}&pageSize=20`;
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState (
        {
          page : this.state.page + 1,
          articles : parsedData.articles
        }
      )
  }
  handlePreviousClick = async () =>
  {
    // &page = number se wo number ka page dikhega and pageSize tells you that how many news in a single page will be shown
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=5f3863ab0e294d3a89c3097826ba64bb&page=${this.state.page - 1}&pageSize=20`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState (
      {
        page : this.state.page - 1,
        articles : parsedData.articles
      }
    )
  }
    
    // {this.state.articles.map((ele) => {console.log(ele)})}  this is the way in which you can get all the object from an array so each element is an object.
  render() {
    console.log("render");
    return (
      <div className="container my-3">
        <h2  style={{color : 'darkgreen'}}>NewsTiger - Top Headlines</h2>
        <div className="row">
          {this.state.articles.map( (ele)=>
          {
            return <div className="col-md-4 my-3" key = {ele.url}> {/* col-md-4 means medium devices mai ye 4 column lega maximum a key should be return as unique id */}
            {/* ele.title != "null" is same as ele.title */}
            <NewsItem title={ele.title ? ele.title.slice(0,30) : "Big Headline"} description={ele.description ?ele.description.slice(0,80) : "Read More....."} urlToImage = {ele.urlToImage} newsUrl = {ele.url}/>
           </div>
          })}
          <div className="container d-flex justify-content-between">
              <button disabled={this.state.page <=1} type="button" class="btn btn-dark" onClick={this.handlePreviousClick}>&larr; Previous</button>
              <button disabled = {this.state.page + 1 > Math.ceil(this.state.totalResults/20)} type="button" class="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
          </div>
        </div>
        
      </div>
    );
  }
}

export default News;
