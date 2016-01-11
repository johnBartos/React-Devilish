const React = require('react');
const Card = require('../components/Card.jsx');
const CardStore = require('../stores/CardStore');

function getCardState() {
  return {
    allCards: CardStore.getAll()
  };
}

const CardGrid = React.createClass({
  getInitialState: () => {
    return getCardState();
  },
  componentDidMount: function didMount() {
    CardStore.addChangeListener(this._onChange);
  },
  componentWillUnmount: function willUnmount() {
    CardStore.removeChangeListener(this._onChange);
  },
  render: function renderCardGrid() {
    const cards = [];
    const allCards = this.state.allCards;

    for (var card in allCards) {
      if (allCards.hasOwnProperty(card)) {
        cards.push(<Card key={card} card={allCards[card]} />);
      }
    }

    return (
      <div className="row">
        <div className="col-xs-12">
          <div className="card-columns">
            {cards}
          </div>
        </div>
      </div>
    );
  },
  _onChange: function onChange() {
    this.setState(getCardState);
  }
});

module.exports = CardGrid;
