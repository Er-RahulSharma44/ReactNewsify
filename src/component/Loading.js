import React, { Component } from 'react'
import loading from './loading.gif'
// import loading1 from './loading1.gif'

export class Loading extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src= {loading } width= "70px" height="70px" alt = "loading"/>
        
      </div>
    )
  }
}

export default Loading
