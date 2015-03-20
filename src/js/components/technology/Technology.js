var React = require('react');

var Technology = React.createClass({
  render: function () {
    return (
      <span className={this.props.technology.primary ? 'primary': null} title={this.props.technology.technology}>
        {this.props.technology.name}
      </span>
    );
  }
});

module.exports = Technology;
