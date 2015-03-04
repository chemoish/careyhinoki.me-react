var React = require('react');
var Header = require('./Header.js');
var Footer = require('./Footer.js');

var App = React.createClass({
  render: function () {
    return (
      <div>
        <Header />

        <div id="main">
          You got to be kitten me.
        </div>

        <Footer />
      </div>
    );
  }
});

module.exports = App;
