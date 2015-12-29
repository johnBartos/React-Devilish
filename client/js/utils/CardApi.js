const rp = require('request-promise');

const get = () => {
  const options = {
    uri: 'http://localhost:4000/api/cards/time',
    method: 'GET',
    headers: { 'user-agent': 'react-proto' }
  };

  return rp(options);
};

module.exports = {
  get: get
};
