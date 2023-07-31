import PropTypes from "prop-types";
import React, { Component } from "react";
import NewsItem from "./NewsItem";
// The Javascript map() method in JavaScript creates an array by calling a specific function on each element present in the parent array
//Looping through an array in JSX to display NewsItems from state
// Now this news will become old after some time so we are not going to do read news by this way we are going to use fetch API to fetch latest news.
export class News extends Component {
  // this articles i am not using as it will give user old data so just for reference how i started and then switch to FETCH API.
  articles = [
    // {
    //   "source": {
    //     "id": null,
    //     "name": "Hollywood Reporter"
    //   },
    //   "author": "Pamela McClintock",
    //   "title": "Box Office: ‘Haunted Mansion’ Spooked, ‘Barbie’ Scores Record $93M Second Weekend - Hollywood Reporter",
    //   "description": "'Haunted Mansion' has started off with a lackluster $24.2 million in another summer bummer for Disney. Elsewhere, 'Oppenheimer' earned a stellar $46.2 million in its sophomore outing.",
    //   "url": "https://www.hollywoodreporter.com/movies/movie-news/haunted-mansion-box-office-opening-haunted-mansion-1235547428/",
    //   "urlToImage": "https://www.hollywoodreporter.com/wp-content/uploads/2023/07/Haunted-Mansion-Barbie-and-Oppenheimer-Split-H-2023.jpg?w=1024",
    //   "publishedAt": "2023-07-30T16:30:00Z",
    //   "content": "Barbie really is a pink unicorn. \r\nThe movie earned an estimated $93 million in its sophomore outing at the North American box office — one of the best second weekends of all time and the best second… [+5745 chars]"
    // }
  ]
  
  // every time a newsitem is made inside the news.js this constructor calls.
  constructor(){
    super();// without this webpage will show you an error.
    console.log("Hello i am a constructor");
    // this below is the state in the class.
    this.state = {
      //  articles : this.articles, // as we are using fetch API
      articles : [],
       loading : false
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
        articles : parsedData.articles // parsedData is similiar to sampleOutput.json and there articles key we need becz it has array of objects
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
          
        </div>
      </div>
    );
  }
}

export default News;
