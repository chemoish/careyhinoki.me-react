var React = require('react');

var Curiosity = React.createClass({
  render: function () {
    return (
      <figure>
        <i className={this.props.curiosity.icon} />

        <figcaption>
          <p>{this.props.curiosity.description}</p>
        </figcaption>
      </figure>
    );
  }
});

module.exports = Curiosity;
