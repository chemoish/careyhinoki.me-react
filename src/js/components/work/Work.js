var React = require('react');

var Work = React.createClass({
  render: function () {
    return (
      <li>
        <figure>
          <h3>{this.props.work.name}</h3>

          <figcaption>{this.props.work.description}</figcaption>
        </figure>
      </li>
    );
  }
});

module.exports = Work;
