const path = require('path');

const routes = (app) => {
  app.use('/api/cards/time', require('./api/cards'));
  app.route('/*')
    .get((req, res) => {
      res.sendFile(path.join(__dirname, '/..', 'index.html'))
    });
};

module.exports = routes;
