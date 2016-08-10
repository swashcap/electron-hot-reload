const React = require('react');
const { Link } = require('react-router');

module.exports = function Navigation() {
  return (
    <nav role="navigation">
      <Link to="/">Home</Link>
      <Link to="/tasks">Tasks</Link>
    </nav>
  );
};

