var React = require('react');

var CuriosityList = require('components/curiosity/CuriosityList.js');

var CuriositySection = React.createClass({
  render: function () {
    return (
      <section id="curiosity">
        <h2>Tiddlywinks &amp; Curiosities</h2>

        <CuriosityList />
      </section>
    );
  }
});

module.exports = CuriositySection;
