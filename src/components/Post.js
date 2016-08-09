import React, { PropTypes } from 'react';
import axios from 'axios';
import marked from 'marked';
import highlight from 'highlight.js'
class Post extends React.Component {
  constructor(){
    super();
    this.state={
      text: ''
    }
  }

  componentDidMount(){
      console.log("enenn")
    let address = `https://raw.githubusercontent.com/s594475/peter/master/posts/${this.props.params.title}.md?v=${Math.random()}`
    axios.get(address).then((res) => {

      this.setState({
        text: res.data
      });
    });

  }

  render(){
    marked.setOptions({
        highlight: function (code) {
          return highlight.highlightAuto(code).value;
        }
      })
    let content = marked(this.state.text!='' ? this.state.text : '稍等.....')

    return(
      <div>

          <div className='post-content'>
               <span dangerouslySetInnerHTML={{__html: content}} />
          </div>
      </div>
    )
  }

}
export default Post;
