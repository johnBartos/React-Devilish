const AppDispatcher = require('../AppDispatcher');
const CardConstants = require('../constants/CardConstants');
const CardApi = require('../utils/CardApi');

const CardActions = {
  create: (body) => {
    CardApi.getTime()
      .then((response) => {
        AppDispatcher.dispatch({
          actionType: CardConstants.CREATE_CARD,
          data: {
            body,
            time: JSON.parse(response).time
          }
        });
      })
      .catch((reason) => {
        AppDispatcher.dispatch({
          actionType: CardConstants.CREATE_CARD_FAILED,
          reason
        });
      });
  }
};

module.exports = CardActions;
