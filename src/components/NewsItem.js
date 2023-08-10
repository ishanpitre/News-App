import React, { Component } from 'react'

export class NewsItem extends Component {

    render() {
        let { title, description, images, newsUrl, author, date,source } = this.props
        return (
            <div className='my-3'>
                <div className="card">
                <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'90%',zIndex:"1"}}> {source}</span>
                    <img src={!images ? "https://c.ndtvimg.com/2023-04/45irt5cg_croc_625x300_09_April_23.jpg" : images} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description} </p>
                        <p className="card-text my-3"><small className="text-danger">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
                        <a rel="noreferrer" href={newsUrl} target='_blank' className="btn btn-sm btn-dark">Read More</a>   
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
