import React, { Component } from 'react';
import map from 'lodash/fp/map';
import axios from 'axios';

import BlogCard from './BlogCard.js';


//https://raw.githubusercontent.com/s594475/peter/master/posts/index.json
class List extends Component {
  constructor(){
    super();
    this.state={
      posts: ''
    }
  }

  componentDidMount(){
    let address = `https://raw.githubusercontent.com/s594475/peter/master/posts/index.json?v=${Math.random()}`
    axios.get(address).then((res) => {
      this.setState({
        posts: res.data
      });
    });
  }

  render(){
    // console.log(Cards.length);
    var blogCards = [];
    map((b) =>  {
                  blogCards.push(
                    <BlogCard title={b.title} date={b.date} index={b.index} key={Math.random()}/>
                  );
                },
        this.state.posts
    );
    // console.log(AllCards);
    return(
      <div>
        {blogCards}
      </div>
    )
  }
}

export default List;
