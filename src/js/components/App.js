var React = require('react');

var AboutSection      = require('components/about/AboutSection.js');
var ContactSection    = require('components/contact/ContactSection.js');
var CuriositySection  = require('components/curiosity/CuriositySection.js');
var Footer            = require('components/Footer.js');
var Header            = require('components/Header.js');
var Introduction      = require('components/introduction/Introduction.js');
var PlaySection       = require('components/play/PlaySection.js');
var TechnologySection = require('components/technology/TechnologySection.js');
var WorkSection       = require('components/work/WorkSection.js');

var App = React.createClass({
  render: function () {
    return (
      <div>
        <Header />

        <div id="main">
          <Introduction />

          <WorkSection />

          <AboutSection />

          <TechnologySection />

          <CuriositySection />

          <PlaySection />

          <ContactSection />
        </div>

        <Footer />
      </div>
    );
  }
});

module.exports = App;
