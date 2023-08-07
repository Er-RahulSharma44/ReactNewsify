import React, { Component } from 'react'

export class Newsiteam extends Component {
  render() {
    let {tittle, description , imageUrl,url, authar , date} = this.props;
    return (
      <div>

        {/* <Badge badgeContent={4} color="primary"> */}
          <div className="card" >
            <img src={imageUrl?imageUrl:"https://cdn.ttgtmedia.com/rms/onlineimages/chatbot_g1270372095.jpg"} className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title"> {tittle?tittle:""}</h5>
            <p className="card-text" style ={{fontSize: "14px"}}>{description?description.slice(0,88):""}...</p>
            <p className="card-text"><small className="text-body-secondary">Publish By {authar?authar:"Unknown"} on {new Date(date).toGMTString()}</small></p>
            <a href={url} rel="noreferrer" target="_blank" className="btn btn-sm btn-dark">View more</a>
        </div>
       </div>
      {/* </Badge> */}
      </div>
    )
  }
}

export default Newsiteam
