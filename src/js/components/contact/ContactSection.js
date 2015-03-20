var React = require('react');

var ContactList = require('components/contact/ContactList.js');

var ContactSection = React.createClass({
  render: function () {
    return (
      <section id="contact">
        <h2>Contact</h2>
        <h3>I can fly</h3>

        <div id="contact_info">
          <h4>How to reach a ninja&hellip;</h4>

          <p>
            I am currently unavailable for freelance work, but I am more than happy to provide a helping hand, consultation, or just a beeming smile.
          </p>

          <p>
            Unfortunately, I am a ninja you will have to contact me in the following ways&hellip;
          </p>

          <ul>
            <li>
              <h5>Email</h5>
              <a href="mailto:carey.hinoki@gmail.com">carey.hinoki@gmail.com</a>
            </li>
            <li>
              <h5>Text</h5>
              562.556.4694
            </li>
            <li>
              <h5>Phone</h5>
              I do not like to talk on the phone
            </li>
          </ul>
        </div>

        <ContactList />
      </section>
    );
  }
});

module.exports = ContactSection;
