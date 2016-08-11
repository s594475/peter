import React, { PropTypes } from 'react';
import Work from './Work'
class Home extends React.Component {
  render () {
    let styles={
      root:{
        width:'100vw',
        height:'100vh',
        background: 'url("http://img1.3lian.com/2015/w7/90/d/7.jpg") no-repeat fixed center center/cover'
      },
      title:{
        color:'#fff',
        textAlign:'center',
        paddingTop:'20%',
        margin:'0',
        fontSize:'60px'
      }
    }
    return(
      <div>
          <div style={styles.root}>
                 <h1 style={styles.title}>WELCOME</h1>
                 <h1 style={{paddingLeft:'44%',margin:'0'}}>My Word!</h1>
          </div>
          <h1 style={{textAlign:'center',fontSize:'30px'}}>My Work!</h1>
          <Work />
    </div>
    )
  }
}

export default Home;
