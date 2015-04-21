var React = require('react');

var Navigation = React.createClass({
  render: function () {
    return (
      <nav role="navigation">
        <ul>
          <li><a>Work</a></li>
          <li><a>About</a></li>
          <li><a>Play</a></li>
          <li><a>Contact</a></li>
        </ul>
      </nav>
    );
  }
});

module.exports = Navigation;
