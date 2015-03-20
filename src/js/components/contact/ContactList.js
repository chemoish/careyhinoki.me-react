var React = require('react');

var Contact = require('components/contact/Contact.js');

var ContactList = React.createClass({
  getInitialState: function () {
    return {
      contact_list: []
    };
  },

  componentDidMount: function () {
    $.ajax({
      url: 'data/personal-infos.json',
      method: 'GET',

      success: function (data, textStatus, jqXHR) {
        this.setState({contact_list: data});
      }.bind(this)
    });
  },

  render: function () {
    var contact_list = this.getContactList();

    return (
        <div>
          {contact_list}
        </div>
    );
  },

  getContactList: function () {
    var contact_list = [],
        contact_list_length = this.state.contact_list.length;

    if (contact_list_length === 0) {
      return null;
    }

    for (var i = 0; i < contact_list_length; i++) {
      contact_list.push(
        <li key={this.state.contact_list[i].title}>
          <Contact contact={this.state.contact_list[i]} />
        </li>
      );
    }

    return (
      <ul>
        {contact_list}
      </ul>
    );
  }
});

module.exports = ContactList;
