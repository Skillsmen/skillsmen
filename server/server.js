/* eslint-disable */
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');


const app = express();
const http = require('http').Server(app);
// const io = require('socket.io')(http);

// const imageMagick = require('imagemagick');
// const gm = require('gm');
// const imageMagick = gm.subClass({ imageMagick: true });

app.use(bodyParser.json());

// io.on('connection', function(socket){
//   console.log('A user connected');
//
//   socket.on('message', function(msg){
//     console.log('here is the submitted message', msg);
//   });
//
//   socket.on('disconnect', function(){
//     console.log('A user disconnectd');
//   });
// });

// Routes
const routes = require('./routes/index.js');
app.use('/', routes);

app.set('port', process.env.PORT || 3000);
http.listen(app.get('port'), function() {
  console.log('listening on port', app.get('port'));
});



