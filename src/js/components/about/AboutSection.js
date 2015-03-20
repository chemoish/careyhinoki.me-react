var React = require('react');

var AboutSection = React.createClass({
  render: function () {
    return (
      <section id="about">
        <h2>About Me</h2>
        <h3>Carey Hinoki&mdash;Web Solutions Architect&mdash;Long Beach, CA</h3>

        <div id="bio">
          <h4>The Introduction&hellip;</h4>

          <p>
            My name is Carey Hinoki. I am a full stack web developer that focuses on non-functional requirements. I strive for nothing less than pixel perfect applications that are backed by performant and maintainable architectures. I have a keen eye, but I am not a designer!
          </p>

          <p>
            I have extensive experience with backend/database driven development, but my passions lie in the front-end. Usability and functionailty are the forefront of every one of my design decisions. I do not specialize in any particular language, but rather architect solutions that can be solved by any language. However, if I had to pick one language that I love most of all I would have to pick Javascript.
          </p>

          <p>
            I love what I do and I especially love working with people who are as passionate about their work as I am.
          </p>
        </div>
      </section>
    );
  }
});

module.exports = AboutSection;
