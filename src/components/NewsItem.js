import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class NewsItem extends Component {
 
  // date we have a string we converted first into object by new Date(date) and then convert in GMTstring for our convienience

  render() {
    let {title , description ,urlToImage , newsUrl , author , date,source} = this.props;
    return (
      <div className='container my-3'>
        <div className="card bg-success"> 
        <span className=" badge rounded-pill bg-success">{source}</span>
        <img src={urlToImage ? urlToImage :"https://www.dsij.in/Portals/0/EasyDNNnews/32092/image_1163.jpg"} className="card-img-top" alt="Sorry!"/>
        <div className="card-body">
            <h5 className="card-title ">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text  "><small className="text-body-secondary" >By {author} on {new Date(date).toGMTString()} </small></p> {/* This extra added as date */}
            <a href={newsUrl} target = "blank" className="btn btn-sm btn-clr">Read More</a> {/* target = "blank" means open  link in new tab*/}
        </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
