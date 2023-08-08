import React, { Component } from "react";
import Newsiteam from "./Newsiteam";
import Loading from "./Loading";
import Newsiteam1 from "./Newsiteam1";
import InfiniteScroll from "react-infinite-scroll-component";




export class Newshome extends Component {
  constructor() {
 
    super();
    this.state = {
      articles: [],

      loading: false,
      page: 1,
      totalResults:0
    };
  }
  handleprev = async () => {
    console.log("preview");
    let data = await fetch(
      `https://newsapi.org/v2/top-headlines?country=in&category=${
        this.props.category
      }&apiKey=19f53997244b44979b88650270ec0449&page=${
        this.state.page - 1
      }&pageSize=5`
    );
    let parsedata = await data.json();
    console.log(parsedata);
    this.setState({ articles: parsedata.articles, page: this.state.page - 1 });
  };

  handlenext = async () => {
    console.log("next");

    // this.state.page = page + 1 ;
    let data = await fetch(
      `https://newsapi.org/v2/top-headlines?country=in&category=${
        this.props.category
      }&apiKey=19f53997244b44979b88650270ec0449&page=${
        this.state.page + 1
      }&pageSize=5`
    );
    let parsedata = await data.json();
    console.log(parsedata);
    this.setState({ articles: parsedata.articles, page: this.state.page + 1 });
  };

  async componentDidMount(){
    this.props.setprogress(10);
    this.setState({ loading: true });
    this.props.setprogress(30);
    let data = await fetch(
      `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=19f53997244b44979b88650270ec0449&page=${this.state.page}&pageSize=5`
    );
    this.props.setprogress(50);
    let parsedata = await data.json();
    this.props.setprogress(70);
    this.setState({
      articles: parsedata.articles,
      result: Math.ceil(parsedata.totalResults / 12),
      loading: false,
      totalResults : parsedata.totalResults
    });
    this.props.setprogress(100);
  }
  fetchMoreData = async ()=>{
    this.setState({page :  this.state.page +1 })
    let data = await fetch(
      `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=19f53997244b44979b88650270ec0449&page=${this.state.page}&pageSize=5`
    );
    let parsedata = await data.json();

    this.setState({
      articles: this.state.articles.concat(parsedata.articles) ,
     
    });
  
  }
  makecapiltal = (str) =>{
    return  str.charAt(0).toUpperCase() + str.slice(1);
   }

  render() {
  
    return (
      <>
         <div className="container" style = {{marginTop:"50px"}}>
         <InfiniteScroll
        
        dataLength={this.state.articles.length?this.state.articles.length:1}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length  !== this.state.totalResults}
          loader={
            <h4>
              <Loading />
            </h4>
          }
        >
        <h1 className="text-center my-2">TOP {this.makecapiltal(this.props.category)} HEADLINES - TODAY'S NEWS</h1>
     
        {this.state.loading && <h4 ><Loading /></h4>}

       
          <div className="row mx-3">
            {this.state.articles.map((data) => {
              return (
                <div key={data.url} className="col-md-4 my-3">
                  <Newsiteam1
                    tittle={data.title}
                    description={data.description}
                    imageUrl={data.urlToImage}
                    url={data.url}
                    authar={data.author}
                    date={data.publishedAt}
                  />
                </div>
              );
            })}
          </div>
        </InfiniteScroll>
         {/* <div className="d-flex justify-content-between my-3">
          <button
            type="button"
            disabled={this.state.page <= 1}
            onClick={this.handleprev}
            className="btn btn-dark"
          >
            &larr; PREVIOUS
          </button>
          <button
            type="button"
            disabled={this.state.page >= this.state.result}
            onClick={this.handlenext}
            className="btn btn-dark"
          >
            NEXT &rarr;
          </button>
        </div> */}
      </div>
      </>
    );
  }
}

export default Newshome;
