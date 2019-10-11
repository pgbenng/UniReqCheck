import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import Home from './Home/index.jsx';
import Admin from './Admin/index.jsx'
import Universities from './Universities/index.jsx'
import About from './About/index.jsx'
import FeeCalculator from './FeeCalculator/index.jsx'

ReactDOM.render((
    <Router history={browserHistory}>
      <Route path="/" component={Home}></Route>
      <Route path='/benisdumb' component={Admin}></Route>
      <Route path='/universities/:uniName/:faculty' component={Universities}></Route>
      <Route path='/about-us' component={About}></Route>
      <Route path='/fee-calculator' component={FeeCalculator}></Route>
      
     
      
    </Router>
), document.getElementById('app'));

