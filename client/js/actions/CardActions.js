const AppDispatcher = require('../AppDispatcher');
const CardConstants = require('../constants/CardConstants');
const CardApi = require('../utils/CardApi');

function getTime() {
  CardApi.get()
    .then((response) => {
      console.log(response);
      return response.data;
    })
    .catch((reason) => {
      console.log('failed to get time ' + reason);
    });
}

const CardActions = {
  create: (body) => {
    AppDispatcher.dispatch({
      actionType: CardConstants.CREATE_CARD,
      data: {
        body: body,
        time: getTime()
      }
    });
  }
};

module.exports = CardActions;
