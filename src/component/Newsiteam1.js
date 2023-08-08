import React, { Component } from 'react'
// import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export class Newsiteam1 extends Component {
  render() {
    let {tittle, description , imageUrl,url, authar , date} = this.props;
    return (
      <div>


    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={imageUrl?imageUrl:"https://cdn.ttgtmedia.com/rms/onlineimages/chatbot_g1270372095.jpg"}
        title= "..."
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {tittle?tittle:""}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {description?description.slice(0,88):""}...
        </Typography>
       
            <p className="card-text" style={{opacity:"0.80"}}><small className="text-body-secondary">Publish By {authar?authar:"Unknown"} on {new Date(date).toGMTString()} </small></p>
      </CardContent>
      <CardActions>
      <a href={url}  rel="noopener" target="_blank" ><Button size="small">Learn More</Button></a> 
      </CardActions>
    </Card>

        
      </div>
    )
  }
}

export default Newsiteam1
