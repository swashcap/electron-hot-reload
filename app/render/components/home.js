const React = require('react');

class Home extends React.Component {
  render() {
    const style = {
      color: '#f3f',
    };
    return <p>Testing React <em style={style}>hot reloading</em> in Electron.</p>
  }
};

module.exports = Home;
