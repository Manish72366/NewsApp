import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class NewsItem extends Component {
 
  

  render() {
    let {title , description ,urlToImage , newsUrl} = this.props;
    return (
      <div className='container my-3'>
        <div className="card" >
        <img src={urlToImage ? urlToImage :"https://www.dsij.in/Portals/0/EasyDNNnews/32092/image_1163.jpg"} className="card-img-top" alt="ab padi sanch"/>
        <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a href={newsUrl} target = "blank" className="btn btn-sm btn-success">Read More</a> {/* target = "blank" means open  link in new tab*/}
        </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
