var React = require('react');

var Navigation = require('components/Navigation.js');

var Header = React.createClass({
  render: function () {
    return (
      <header>
        <Navigation />
      </header>
    );
  }
});

module.exports = Header;
