// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import Navbar from "./component/Navbar"
import Newshome from './component/Newshome';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";
import Newsiteam1 from './component/Newsiteam1';

export default class App extends Component {

   state ={progress : 0

   }
  setprogress = (value) =>{
    this.setState({progress: value});
  }

  render() {
 
    return (
      <>
        <div>
        <Navbar/>
        <LoadingBar
        color='#f11946'
        progress= {this.state.progress}
        
       
      />
      {/* <Newsiteam1/> */}
         <div>
        <Routes>
          <Route exact path="/science" element={ <Newshome setprogress ={ this.setprogress }   key ="science" category ="science"/>}/>
            <Route exact  path="/business"   element={<Newshome setprogress ={ this.setprogress }   key ="business" category ="business"/>}/>
            <Route exact  path="/entertainment" element={<Newshome setprogress ={ this.setprogress }  key ="entertainment"  category ="entertainment"/>} />
      
          <Route exact path="/" element={<Newshome setprogress ={ this.setprogress }  key ="general" category ="general"/>} />
          <Route exact  path="/health" element={<Newshome setprogress ={ this.setprogress }  key ="health"  category ="health"/>} />
          <Route exact  path="/sports" element={<Newshome setprogress ={ this.setprogress }  key ="sports" category ="sports"/>} />
          <Route exact path="/technology" element={<Newshome setprogress ={ this.setprogress }  key ="technology" category ="technology"/>} />
        </Routes>
        </div>
        </div>
        </>
    )
  }
}

