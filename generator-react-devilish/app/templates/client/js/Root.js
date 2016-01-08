const ReactDOM = require('react-dom');
const React = require('react');
const Router = require('react-router').Router;
const Route = require('react-router').Route;
const App = require('./pages/App.jsx')
const Nowhere = require('./pages/Nowhere.jsx');

const history = require('history').createHistory();

ReactDOM.render(
  <Router history={history}>
    <Route name="home" path="/" component={App} />
    <Route name="nowhere" path="/nowhere" component={Nowhere} />
  </Router>,
  document.getElementById('root')
);
