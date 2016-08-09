import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router';


class AppLeftNav extends React.Component {

  constructor(props) {
     super(props);
     this.state = {
       open: false,
       title:''
     };
   }

   handleToggle = () => this.setState({open: !this.state.open});

   handleClose = () => this.setState({open: false});

   componentWillReceiveProps() {
     this.setNavState();
   }
   componentDidMount(){
     this.setNavState();
   }
   setNavState(){
     this.setState({
       title:this.context.router.isActive('/', true) ? 'HOME' :
         this.context.router.isActive('/blog')? 'BLOG' :
         this.context.router.isActive('/about')? 'ABOUT' : 'HOME'
     });
   }
  render() {
    let styles={
      link:{
        textDecoration:'none',
        display:'block'
      },
      navTitle:{
        color:'#fff',
        lineHeight:'75px',
        fontSize:'20px',
        backgroundColor:'#00BCD4',
        marginBottom:'10px',
        marginTop: '0'
      }}
    return (
      <div>
        <Drawer
          docked={false}
          width={200}
          style={{textAlign:'center'}}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
            <p style={styles.navTitle} onClick={this.handleClose.bind(this)}>{this.state.title}</p>
            <MenuItem onTouchTap={this.handleClose}>
                <Link to="/" style={styles.link} activeStyle={{color:'red'}} onlyActiveOnIndex={true}>首页</Link>
            </MenuItem>
            <MenuItem onTouchTap={this.handleClose}>
                <Link to="blog" style={styles.link} activeStyle={{color:'red'}}>博客</Link>
            </MenuItem>
            <MenuItem onTouchTap={this.handleClose}>
                <Link to="about" style={styles.link} activeStyle={{color:'red'}}>关于</Link>
            </MenuItem>

        </Drawer>
      </div>
    );
  }
}
AppLeftNav.contextTypes = {
  router: React.PropTypes.object.isRequired
}
export default AppLeftNav;
