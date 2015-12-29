const AppDispatcher = require('../AppDispatcher');
const EventEmitter = require('events').EventEmitter;
const CardConstants = require('../constants/CardConstants');

const CHANGE_EVENT = 'change';
const _cards = {};

function create(data) {
  const id = (Date.now() + Math.floor(Math.random() * 999999)).toString(36);
  _cards[id] = {
    body: data.body,
    time: data.time
  };
}

const CardStore = Object.assign({}, EventEmitter.prototype, {
  getAll: () => {
    return _cards;
  },
  emitChange: function emitChange() {
    this.emit(CHANGE_EVENT);
  },
  addChangeListener: function addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  },
  removeChangeListener: function removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

AppDispatcher.register((action) => {
  switch (action.actionType) {
    case CardConstants.CREATE_CARD:
      create(action.data);
      CardStore.emitChange();
      break;

    default:
  }
});

module.exports = CardStore;
