/* eslint-disable */
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const http = require('http').Server(app);
// const io = require('socket.io')(http);

const imageMagick = require('imagemagick');

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


/*
 * Load the S3 information from the environment constiables.
 */

// if (!process.env.S3_SECRET || !process.env.S3_KEY || !process.env.S3_BUCKET) {
//   console.log('Using dotenv!');
//   require('dotenv').config()
// }

// require('dotenv').config({path: __dirname + '/.env'});

const S3_BUCKET = process.env.S3_BUCKET;
const S3_KEY = process.env.S3_KEY;
const S3_SECRET =process.env.S3_SECRET

aws.config.update({
    accessKeyId: S3_KEY,
    secretAccessKey: S3_SECRET,
});


var client = new Upload('puffyshirts', {
  awsBucketRegion: 'us-west-2',
  awsBucketPath: '/images/',
  awsBucketAcl: 'public-read',
  aws: {
     path: 'images/',
     region: 'us-east-1',
     acl: 'public-read'
   },
   cleanup: {
     versions: true,
     original: false
   },
   original: {
     awsImageAcl: 'public-read'
   },
  versions: [{
    original: true
  },
  {
    suffix: '-small',
    maxHeight: 320,
    maxWidth: 320
  },
  {
    suffix: '-thumb',
    maxWidth: 64,
    maxHeight: 64,
    crop: {
      x: 20,
      y: 35,
      width: 100,
      height: 100
    }
  }
  ]
});


/*
 * Respond to GET requests to /sign-s3.
 * Upon request, return JSON containing the temporarily-signed S3 request and
 * the anticipated URL of the image.
 */
app.get('/sign-s3', (req, res) => {
  const s3 = new aws.S3();
  const fileName = req.query.fileName;
  const fileType = req.query.fileType;
  const s3Params = {
    Bucket: S3_BUCKET,
    Key: fileName,
    Expires: 31536000,
    ContentType: fileType,
    ACL: 'public-read'
  };
  s3.getSignedUrl('putObject', s3Params, (err, data) => {
    if(err){
      console.error(err);
      return res.end();
    }
    const returnData = {
      signedRequest: data,
      url: `https://${S3_BUCKET}.s3.amazonaws.com/${fileName}`
    };
    res.send(JSON.stringify(returnData));
    res.end();
  });
});

app.get('/s3-uploader', (req, res) => {
  const picSrc = imageMagick(req.query.picSrc);
  const result = {};
  client.upload(picSrc, {}, function(err, images, meta) {
    if (err) {
      console.error('ERROR IN S3UPLOADER ',err);
    } else {
      for (var i = 0; i < images.length; i++) {
        result['image'.concat(i)] = images[i].url
      }
      res.send(JSON.stringify(result));
      res.end();
    }
  });
})

