var React = require('react');

var Play = require('components/play/Play.js');

var shuffle = require('common/shuffle.js');

var PlayList = React.createClass({
  getInitialState: function () {
    return {
      play_list: []
    }
  },

  componentDidMount: function () {
    $.ajax({
      url: 'data/plays.json',
      method: 'GET',

      success: function (data, textStatus, jqXHR) {
        data = shuffle(data);

        this.setState({play_list: data});
      }.bind(this)
    });
  },

  render: function () {
    var play_list = this.getPlayList();

    return (
      <ul>
        {play_list}
      </ul>
    );
  },

  getPlayList: function () {
    var play_list = [],
        play_list_length = this.state.play_list.length;

    if (play_list_length === 0) {
      return null;
    }

    for (var i = 0; i < play_list_length; i++) {
      play_list.push(
        <li key={this.state.play_list[i].id}>
          <Play play={this.state.play_list[i]} />
        </li>
      );
    }

    return play_list;
  }
});

module.exports = PlayList;
