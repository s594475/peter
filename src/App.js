import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Header from './components/Header/Header';
import Footer from './components/Footer';
class App extends React.Component {
  getChildContext() {
    return {muiTheme: getMuiTheme()};
  }
  render () {
    return(
      <div>
          <Header />
          {this.props.children}
          <Footer />
      </div>
    )
  }
}

App.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};

export default App;
