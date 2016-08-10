const React = require('react');

const Navigation = require('./navigation');

class App extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <div>
        <h1>Electron <del>Hot</del> Reload!</h1>
        <Navigation />
        {children}
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.node,
};

module.exports = App;

