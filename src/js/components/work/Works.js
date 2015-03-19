var React = require('react');

var Work = require('components/work/Work.js');

var shuffle = require('common/shuffle.js');

var Works = React.createClass({
  getInitialState: function () {
    return {
      limit: 6,
      works: []
    }
  },

  componentDidMount: function () {
    $.ajax({
      url: 'data/works.json',
      method: 'GET',

      success: function (data, textStatus, jqXHR) {
        data = shuffle(data);

        this.setState({works: data});
      }.bind(this)
    });
  },

  render: function () {
    var works = this.getWorks();

    var show_all_button = this.getShowAllButton();

    return (
      <section>
        <h2>Featured Work</h2>
        <h3>Work&mdash;Fun&mdash;Code</h3>

        <ul>
          {works}
        </ul>

        {show_all_button}
      </section>
    );
  },

  getShowAllButton: function () {
    var show_all_button;

    if (this.state.limit === this.state.works.length) {
      show_all_button = null;
    } else {
      show_all_button = (
        <button type="button" onClick={this.showAll}>Show All</button>
      );
    }

    return show_all_button;
  },

  getWorks: function () {
    var works = [],
        works_length = this.state.works.length;

    if (works_length === 0) {
      return null;
    }

    for (var i = 0; i < this.state.limit; i++) {
      works.push(<Work work={this.state.works[i]} key={this.state.works[i].id} />);
    }

    return works;
  },

  showAll: function (event) {
    this.setState({limit: this.state.works.length});
  }
});

module.exports = Works;
