const React = require('react');
const PropTypes = React.PropTypes;
const CardMaker = require('../components/CardMaker.jsx');
const CardGrid = require('../components/CardGrid.jsx');

const App = React.createClass({
  propTypes: {
    children: PropTypes.object
  },

  render: function renderApp() {
    return (
      <section className="App">
        <div className="container main">
          <h1 className="text-xs-center">HELLO CRUEL WORLD</h1>
          <CardMaker
          />
          <CardGrid
            />
        </div>
        {this.props.children}
      </section>
    );
  }
});

module.exports = App;
