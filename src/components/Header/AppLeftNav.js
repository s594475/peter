import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router';
export default class DrawerUndockedExample extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  render() {
    let styles={
      link:{
        textDecoration:'none',
        display:'block'
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
