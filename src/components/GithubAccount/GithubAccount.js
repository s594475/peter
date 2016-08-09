import React, { Component } from 'react';
import {Card} from 'material-ui/Card';
import isEmpty from 'lodash/isEmpty';
import UserInfo from './UserInfo';
import Repos from './Repos';
import github from './github';
import Echarts from './Echarts'
import CircularProgress from 'material-ui/CircularProgress';

class GithubAccount extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: {},
      wait:true
    };
  }
  componentDidMount() {
    github.getGithubInfo('s594475')
      .then((data) => {
        this.setState({
          user: data.user,
          repos: data.repos,
          wait:false
        });
      });
  }
  render(){
    let GitHubInfo;
    let x = <CircularProgress size={2} style={{marginLeft:'50%'}}/>;
    if(!isEmpty(this.state.user)) {
      GitHubInfo = (
        <div>
          <UserInfo userInfo={this.state.user} />
          <Repos repos={this.state.repos} />
        </div>
      );
    }
    return(
      <div>
        {this.state.wait ? x :
          <div className='account'>
            <Card className="content">
              { GitHubInfo }
            </Card>
            <Card className="content">
                <Echarts />
            </Card>

          </div>
        }
    </div>
    )
  }
}

export default GithubAccount;
