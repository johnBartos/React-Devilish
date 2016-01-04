const express = require('express');
const path = require('path');
const app = express();

app.use('/client', express.static(path.join(__dirname, '/..', '/client')));
app.use('/node_modules/bootstrap', express.static(path.join(__dirname, '/..', '/node_modules/bootstrap')));

require('./routes.js')(app);

app.listen(4000);
console.log('Listening on port 4000');
