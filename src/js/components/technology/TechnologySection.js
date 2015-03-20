var React = require('react');

var TechnologyList = require('components/technology/TechnologyList.js');

var TechnologySection = React.createClass({
  render: function () {
    return (
      <section id="technology">
        <h2>Technologies</h2>

        <TechnologyList />
      </section>
    );
  }
});

module.exports = TechnologySection;
