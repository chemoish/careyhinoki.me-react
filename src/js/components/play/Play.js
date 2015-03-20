var React = require('react');

var Play = React.createClass({
  render: function () {
    return (
      <figure>
        <h3>{this.props.play.name}</h3>

        <figcaption>{this.props.play.description}</figcaption>
      </figure>
    );
  }
});

module.exports = Play;
