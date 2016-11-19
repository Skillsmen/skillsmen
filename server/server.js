/* eslint-disable */
const Upload = require('s3-uploader');
const express = require('express');
const aws = require('aws-sdk');
const bodyParser = require('body-parser');

// Routes
const routes = require('./routes/index.js');

const app = express();
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', routes);

// app.use('/users', require('./routes/users'));
// app.use('/jobs', require('./routes/jobs'));

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function() {
  console.log('listening on port', app.get('port'));
});

/*
 * Load the S3 information from the environment constiables.
 */
require('dotenv').config()
const S3_BUCKET = process.env.S3_BUCKET;
const S3_KEY = process.env.S3_KEY;
const S3_SECRET =process.env.S3_SECRET

aws.config.update({
    accessKeyId: S3_KEY,
    secretAccessKey: S3_SECRET,
});

var client = new Upload(S3_BUCKET, {
  awsBucketRegion: 'us-east-1',
  awsBucketPath: 'images/',
  awsBucketAcl: 'public-read',

  versions: [{
    original: true
  },{
    suffix: '-large',
    quality: 80,
    maxHeight: 1040,
    maxWidth: 1040,
  },{
    suffix: '-medium',
    maxHeight: 780,
    maxWidth: 780
  },{
    suffix: '-small',
    maxHeight: 320,
    maxWidth: 320
  },{
    suffix: '-thumb',
    maxWidth: 64,
    maxHeight: 64,
    crop: {
      x: 20,
      y: 35,
      width: 100,
      height: 100
    }
  }]
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
  const picSrc = req.query.picSrc;

  client.upload(picSrc, {}, function(err, images, meta) {
    if (err) {
      console.error(err);
    } else {
      for (var i = 0; i < images.length; i++) {
        console.log('Thumbnail with width %i, height %i, at %s', images[i].width, images[i].height, images[i].url);
      }
    }
  });
})
