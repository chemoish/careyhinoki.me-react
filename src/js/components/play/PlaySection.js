var React = require('react');

var PlayList = require('components/play/PlayList.js');

var PlaySection = React.createClass({
  render: function () {
    return (
      <section id="play">
        <h2>Play</h2>
        <h3>You know, the gists and stuff</h3>

        <PlayList />
      </section>
    );
  }
});

module.exports = PlaySection;
