var React = require('react');

var Work = require('components/work/Work.js');

var shuffle = require('common/shuffle.js');

var WorkList = React.createClass({
  getInitialState: function () {
    return {
      work_list: []
    }
  },

  componentDidMount: function () {
    $.ajax({
      url: 'data/works.json',
      method: 'GET',

      success: function (data, textStatus, jqXHR) {
        data = shuffle(data);

        this.setState({work_list: data});
      }.bind(this)
    });
  },

  render: function () {
    var work_list = this.getWorkList();

    return (
      <ul>
        {work_list}
      </ul>
    );
  },

  getWorkList: function () {
    var limit,
        work_list = [],
        work_list_length = this.state.work_list.length;

    if (work_list_length === 0) {
      return null;
    }

    if (this.props.limit === null) {
      limit = work_list_length;
    } else {
      limit = this.props.limit;
    }

    for (var i = 0; i < limit; i++) {
      work_list.push(
        <li key={this.state.work_list[i].id}>
          <Work work={this.state.work_list[i]} />
        </li>
      );
    }

    return work_list;
  }
});

module.exports = WorkList;
