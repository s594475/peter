import React, { Component } from 'react';
import map from 'lodash/fp/map';
import axios from 'axios';

import BlogCard from './BlogCard.js';
import CircularProgress from 'material-ui/CircularProgress';

//https://raw.githubusercontent.com/s594475/peter/master/posts/index.json
class List extends Component {
  constructor(){
    super();
    this.state={
      posts: '',
      wait:true
    }
  }

  componentDidMount(){
    let address = `https://raw.githubusercontent.com/s594475/peter/master/posts/index.json?v=${Math.random()}`
    axios.get(address).then((res) => {
      this.setState({
        posts: res.data,
          wait:false
      });
    });
  }

  render(){
    // console.log(Cards.length);
    let x = <CircularProgress size={2} style={{marginLeft:'50%'}}/>;
    var blogCards = [];
    map((b) =>  {
                  blogCards.push(
                    <BlogCard title={b.title} date={b.date} index={b.index} url={b.name} key={Math.random()}/>
                  );
                },
        this.state.posts
    );
    // console.log(AllCards);
    return(
      <div>
          {this.state.wait ? x :
          <div>
              {blogCards}
          </div>
        }
      </div>
    )
  }
}

export default List;
