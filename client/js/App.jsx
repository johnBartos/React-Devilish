const React = require('react');
const PropTypes = React.PropTypes;
const CardGrid = require('./components/CardGrid.jsx');

const App = React.createClass({
  propTypes: {
    children: PropTypes.object
  },

  render: function renderApp() {
    return (
      <section className="App">
        <div className="container-fluid">
          <div className="row-fluid">
            <h1>HELLO CRUEL WORLD</h1>
            <CardGrid
              />
          </div>
        </div>
        {this.props.children}
      </section>
    );
  }
});

module.exports = App;
