import React, { useState , useEffect} from "react";  // this is used in function based component
import PropTypes from "prop-types";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
const News = (props) => {
  const [articles , setArticles] = useState([]);
  const [loading , setLoading] = useState(false);
  const [page , setPage] = useState(1);
  const [totalResults , setTotalResults] = useState(0);
  const updateClick = async () =>
  {
    props.setProgress(0)
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url); 
    props.setProgress(30)
    let parsedData = await data.json(); 
    props.setProgress(70)
    setArticles(parsedData.articles)
    setLoading(false);
    setTotalResults(parsedData.totalResults);
    props.setProgress(100)
  }
  // componentDidMount used in class based component here we replaced it by useEffect
  // const componentDidMount = async () =>{
  //   updateClick();
  // }
  useEffect(() => {
     updateClick();
  }, []) // this [] means kiske khne pe ye run hoga but yha kio condition nahi hai yha hm chathe hai ki ye run ho jb return ho jaye
  
  const handleNextClick = async () =>
  {
    setPage( page + 1)
    updateClick();
  }
  const handlePreviousClick = async () =>
  {
    setPage( page - 1)
    updateClick();
  }
  const fetchMoreData = async () =>
  {
    
    setPage( page + 1) 
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
    setLoading(false);
  }
  return (
      <>
        <h2  className= "text-center " style={{color : 'rgba(var(--bs-success-rgb)' , margin : '20px 0px' }}>NewsTiger - Top Headlines</h2>
        {loading && <Spinner/>} {/* loading true so spinner show*/}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData} // more data
          hasMore={articles.length !== totalResults } // kb tk krna hai .
          loader={loading && <Spinner/>} style= {{overflow :'hidden'} }> 
          <div className="container">
          <div className="row">
          {articles.map((ele , index)=> // index used as indentifier simple
          { 
            return <div className="col-md-4 my-3" key = {index}> 
            <NewsItem title={ele.title ? ele.title.slice(0,30) : "Big Headline"} description={ele.description ?ele.description.slice(0,80) : "Read More....."} urlToImage = {ele.urlToImage} newsUrl = {ele.url} author = {ele.author ? ele.author : "Unknown"} date = {ele.publishedAt} source = {ele.source.name}/></div>
          })}
          </div>
          </div></InfiniteScroll>
      </>
    );
}

News.defaultProps = {
  country: 'in',
  pageSize: 8,
  category: 'general'
}
News.propTypes = {
   country : PropTypes.string,
   pageSize: PropTypes.number,
   category: PropTypes.string
}
export default News;
