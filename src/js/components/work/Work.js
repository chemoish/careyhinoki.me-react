var React = require('react');

var Work = React.createClass({
  render: function () {
    return (
      <figure>
        <a href="#">
          <img src={this.props.work.img} />
        </a>

        <figcaption>{this.props.work.description}</figcaption>
      </figure>
    );
  }
});

module.exports = Work;
