const React = require('react');
const { IndexRoute, Route } = require('react-router');

const App = require('./components/app');
const Home = require('./components/home');
const Tasks = require('./components/tasks');

module.exports = (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="tasks" component={Tasks} />
  </Route>
);
