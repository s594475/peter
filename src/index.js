import React, { Component } from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import './style/main.css';
import './style/hljs.css';
import './style/post.css';
import {render} from 'react-dom';
import {Router,hashHistory} from 'react-router';
import routes from './routes.js';

import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();


render(<Router routes={routes} history={hashHistory} />
  ,document.getElementById('root'));
