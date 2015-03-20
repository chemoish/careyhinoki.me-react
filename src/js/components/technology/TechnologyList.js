var React = require('react');

var Technology = require('components/technology/Technology.js');

var TechnologyList = React.createClass({
  getInitialState: function () {
    return {
      technology_list: []
    };
  },

  componentDidMount: function () {
    $.ajax({
      url: 'data/technologies.json',
      method: 'GET',

      success: function (data, textStatus, jqXHR) {
        this.setState({
          technology_list: data
        });
      }.bind(this)
    });
  },

  render: function () {
    var technology_list = this.getTechnologyList();

    return (
      <ul>
        {technology_list}
      </ul>
    );
  },

  getTechnologyList: function () {
    var technology_list = [],
        technology_list_length = this.state.technology_list.length;

    if (technology_list_length === 0) {
      return null;
    }

    for (var i = 0; i < technology_list_length; i++) {
      technology_list.push(
        <li key={this.state.technology_list[i].name}>
          <Technology technology={this.state.technology_list[i]} />
        </li>
      );
    }

    return technology_list;
  }
});

module.exports = TechnologyList;
