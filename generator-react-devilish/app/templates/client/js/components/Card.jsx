const React = require('react');
const PropTypes = React.PropTypes;

const Card = React.createClass({
  propTypes: {
    card: PropTypes.object,
    time: PropTypes.number
  },

  render: function renderCard() {
    return (
      <div className="card text-xs-center">
        <div className="card-body">
          {this.props.card.body}
          <div className="text-muted">
            {this.props.card.time}
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Card;
