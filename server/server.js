/* eslint-disable */
var express = require('express');
var bodyParser = require('body-parser');

// Routes
var routes = require('./routes/index.js');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', routes);

// app.use('/users', require('./routes/users'));
// app.use('/jobs', require('./routes/jobs'));

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function() {
  console.log('listening on port', app.get('port'));
});

