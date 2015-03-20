var React = require('react');

var Contact = React.createClass({
  render: function () {
    var label,
        contact = this.props.contact;

    if (contact.url === undefined) {
      label = (
        <span>{contact.description}</span>
      );
    } else {
      label = (
        <a href={contact.url}>{contact.description}</a>
      );
    }

    return (
      <div>
        <h4>{contact.title}</h4>

        {label}
      </div>
    );
  }
});

module.exports = Contact;
