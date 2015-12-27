const AppDispatcher = require('../AppDispatcher');
const CardConstants = require('../constants/CardConstants');

const CardActions = {
  create: (body) => {
    AppDispatcher.dispatch({
      actionType: CardConstants.CREATE_CARD,
      body: body
    });
  }
};

module.exports = CardActions;
