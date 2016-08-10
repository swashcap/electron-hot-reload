const { connect } = require('react-redux');
const React = require('react');

class Dashboard extends React.Component {
  render() {
    const { items } = this.props;

    return (
      <ul>
        {items.map((item, index) => {
          return <li key={index}>{item}</li>
        })}
      </ul>
    );
  }
}

Dashboard.propTypes = {
  items: React.PropTypes.array.isRequired,
};

module.exports = connect(state => state)(Dashboard);

