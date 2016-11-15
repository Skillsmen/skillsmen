const express = require('express');
var models = require('./models/index.js');

const app = express();

// Routes
app.use('/users', require('./routes/users'));
app.use('/jobs', require('./routes/jobs'));

app.listen(3000);
console.log('Listening on 3000');
