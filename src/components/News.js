import PropTypes from "prop-types";
import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
export class News extends Component {
  // setting default props
  static defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general'
  }
  // setting data types of props so then wrong data type won't send
  static propTypes = {
     country : PropTypes.string,
     pageSize: PropTypes.number,
     category: PropTypes.string
  }
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
    this.props.setProgress(0)
    console.log("Mai sabse baad mai run honga .mai use hora hu kunki mujshe hamesa current news milengi API se fetch krne ke baad");
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading : true});
    let data = await fetch(url); // wait while whole url will not fetch .
    this.props.setProgress(30)
    console.log(data); // Response from fetched url
    // The .json() method of the Response interface takes a Response stream and reads it to completion. It returns a promise which resolves with the result of parsing the body text as JSON .
    let parsedData = await data.json(); // Data parsing is converting data from one format to another. here converting to a json file.
    this.props.setProgress(70)
    console.log(parsedData);
    this.setState (
      {
        articles : parsedData.articles, // parsedData is similiar to sampleOutput.json and there articles key we need becz it has array of objects
        totalResults : parsedData.totalResults,
        loading:false
      }
    )
    this.props.setProgress(100)
  }
  updateClick = async () =>
  {
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
      this.setState({loading : true});
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState (
      {
          articles : parsedData.articles,
          totalResults : parsedData.totalResults,
          loading : false
      })
  }
  handleNextClick = async () =>
  {
     this.setState ({page : this.state.page + 1})
  }
  handlePreviousClick = async () =>
  {
    this.setState ({page : this.state.page - 1})
  }
  fetchMoreData = async () =>
  {
     
      this.setState ({page : this.state.page + 1}) // aage ke page se ab data fetch krna hai.
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
      this.setState({loading : true});
      let data = await fetch(url);
      let parsedData = await data.json(); // parsedData ke andr arcticle hai key  ke roop mai ap sample output dekh skte ho
      console.log(parsedData);
      this.setState (
      {
          articles : this.state.articles.concat(parsedData.articles),
          totalResults : parsedData.totalResults,
          loading : false
      })
  }
    // {this.state.articles.map((ele) => {console.log(ele)})}  this is the way in which you can get all the object from an array so each element is an object.
  render() {
    console.log("render");
    // is line ke baad didMount wala function run karo along with below.
    return (
      <>
        <h2  className= "text-center " style={{color : 'rgba(var(--bs-success-rgb)' , margin : '20px 0px' }}>NewsTiger - Top Headlines</h2>
        {this.state.loading && <Spinner/>} {/* loading true so spinner show*/}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData} // more data
          hasMore={this.state.articles.length !== this.state.totalResults } // kb tk krna hai .
          loader={this.state.loading && <Spinner/>} style= {{overflow :'hidden'} }> {/* overflow hidden so then scroll bar na dikhe niche*/}
          <div className="container">
          <div className="row">
          {this.state.articles.map((ele , index)=> // index used as indentifier simple
          { 
            return <div className="col-md-4 my-3" key = {index}> 
            <NewsItem title={ele.title ? ele.title.slice(0,30) : "Big Headline"} description={ele.description ?ele.description.slice(0,80) : "Read More....."} urlToImage = {ele.urlToImage} newsUrl = {ele.url} author = {ele.author ? ele.author : "Unknown"} date = {ele.publishedAt} source = {ele.source.name}/></div>
          })}
          </div>
          </div></InfiniteScroll>

          {/* this is for next and previous button */}
          {/* <div className="container d-flex justify-content-between">
              <button disabled={this.state.page <=1} type="button" className="btn btn-dark" onClick={this.handlePreviousClick}>&larr; Previous</button>
              <button disabled = {this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
          </div> */}
      </>
    );
  }
}

export default News;
