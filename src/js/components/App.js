var React = require('react');

var Header = require('components/Header.js');
var Footer = require('components/Footer.js');
var Works = require('components/work/Works.js');

var App = React.createClass({
  render: function () {
    return (
      <div>
        <Header />

        <div id="main">
          <Works />
        </div>

        <Footer />
      </div>
    );
  }
});

module.exports = App;
