var React = require('react');

var Curiosity = require('components/curiosity/Curiosity.js');

var CuriosityList = React.createClass({
  getInitialState: function () {
    return {
      curiosity_list: []
    };
  },

  componentDidMount: function () {
    $.ajax({
      url: 'data/curiosities.json',
      method: 'GET',

      success: function (data, textStatus, jqXHR) {
        this.setState({
          curiosity_list: data
        });
      }.bind(this)
    });
  },

  render: function () {
    var curiosity_list = this.getCuriosityList();

    return (
      <ul>
        {curiosity_list}
      </ul>
    );
  },

  getCuriosityList: function () {
    var curiosity_list = [],
        curiosity_list_length = this.state.curiosity_list.length;

    if (curiosity_list_length === 0) {
      return null;
    }

    for (var i = 0; i < curiosity_list_length; i++) {
      curiosity_list.push(
        <li key = {this.state.curiosity_list[i].description}>
          <Curiosity curiosity={this.state.curiosity_list[i]} />
        </li>
      );
    }

    return curiosity_list;
  }
});

module.exports = CuriosityList;
