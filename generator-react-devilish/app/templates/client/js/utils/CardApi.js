const rp = require('request-promise');

const getTime = () => {
  const options = {
    uri: 'http://localhost:4000/api/cards/time',
    method: 'GET',
    headers: { 'user-agent': 'react-proto' }
  };

  return rp(options);
};

module.exports = {
  getTime
};
