const React = require('react');
const { IndexRoute, Route } = require('react-router');

const App = require('./components/app');
const Dashboard = require('./components/dashboard');

module.exports = (
  <Route path="/" component={App}>
    <IndexRoute component={Dashboard} />
  </Route>
);
