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

app.listen(3000);
console.log('Listening on 3000');
