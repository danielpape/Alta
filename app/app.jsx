var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Feed = require('Feed');
var Nearby = require('Nearby');
var Profile = require('Profile');

// Load foundation-sites
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="nearby" component={Nearby}/>
      <Route path="profile" component={Profile}/>
      <IndexRoute component={Feed}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
