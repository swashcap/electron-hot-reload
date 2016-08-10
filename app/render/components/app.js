const React = require('react');

class App extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <div>
        <h1>Electron Hot Reload!</h1>
        <p>Testing React hot reloading in Electron.</p>
        {children}
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.node,
};

module.exports = App;

