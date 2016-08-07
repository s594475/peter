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
    let address = `https://raw.githubusercontent.com/s594475/peter/master/posts/${this.props.params.title}.md?v=${Math.random()}`
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

          <div>
               <span dangerouslySetInnerHTML={{__html: content}} />
          </div>
      </div>
    )
  }

}
export default Post;
