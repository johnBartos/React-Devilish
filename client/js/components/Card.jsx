const React = require('react');
const PropTypes = React.PropTypes;

const Card = React.createClass({
  propTypes: {
    card: PropTypes.object
  },

  render: function renderCard() {
    console.log(this.props.card);
    return (
      <div className="card">
        <div className="card-body">
          {this.props.card.body}
          {this.props.card.time}
        </div>
      </div>
    );
  }
});

module.exports = Card;
