const React = require('react');
const CardActions = require('../actions/CardActions');

const CardMaker = React.createClass({
  getInitialState: () => {
    return { value: 'the card says' };
  },
  handleChange: function handleChange(event) {
    this.setState({ value: event.target.value });
  },
  onPress: function onPress() {
    CardActions.create(this.state.value);
  },
  render: function renderCardMaker() {
    return (
      <div className="row cardMaker">
        <div className="col-xs-12">
          <div className="input-group">
            <input type="text" className="form-control" name="cardMakerInput" value={this.state.value} onChange={this.handleChange}></input>
            <span className="input-group-btn">
              <button className="btn btn-secondary" type="submit" onClick={this.onPress}>BUILD IT</button>
            </span>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = CardMaker;
