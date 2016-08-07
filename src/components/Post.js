import React, { PropTypes } from 'react';
import axios from 'axios';
import marked from 'marked';
class Post extends React.Component {
  constructor(){
    super();
    this.state={
      text: ''
    }
  }

  componentDidMount(){
      console.log("enenn")
    let address = `https://raw.githubusercontent.com/happypeter/big-demo/master/posts/git-tips.md?v=${Math.random()}`
    axios.get(address).then((res) => {

      this.setState({
        text: res.data
      });
    });

  }

  render(){
    let content = marked(this.state.text!='' ? this.state.text : '稍等.....')
    return(
      <div>
          {this.props.params.title}
          <div>
               <span dangerouslySetInnerHTML={{__html: content}} />
          </div>
      </div>
    )
  }

}
export default Post;
