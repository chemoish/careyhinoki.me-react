var React = require('react');

var WorkList = require('components/work/WorkList.js');

var WorkSection = React.createClass({
  getInitialState: function () {
    return {
      limit: 6
    }
  },

  render: function () {
    var show_all_button = this.getShowAllButton();

    return (
      <section id="work">
        <div className="row">
          <div className="columns">
            <h2>Featured Work</h2>
            <h3>Work&mdash;Fun&mdash;Code</h3>

            <WorkList limit={this.state.limit} />

            {show_all_button}
          </div>
        </div>
      </section>
    );
  },

  getShowAllButton: function () {
    var show_all_button;

    if (this.state.limit === null) {
      show_all_button = null;
    } else {
      show_all_button = (
        <button type="button" onClick={this.showAll}>Show All</button>
      );
    }

    return show_all_button;
  },

  showAll: function (event) {
    this.setState({limit: null});
  }
});

module.exports = WorkSection;
