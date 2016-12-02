const Upload = require('s3-uploader');
const fs = require('fs');
const aws = require('aws-sdk');

require('dotenv').config({ path: __dirname + '/../.env' });

const S3_KEY = process.env.S3_KEY;
const S3_SECRET = process.env.S3_SECRET;

aws.config.update({
  accessKeyId: S3_KEY,
  secretAccessKey: S3_SECRET,
});


const client = new Upload('puffyshirts', {
  awsBucketRegion: 'us-west-2',
  awsBucketPath: '/images/',
  awsBucketAcl: 'public-read',
  aws: {
    path: 'images/',
    region: 'us-east-1',
    acl: 'public-read',
  },
  cleanup: {
    versions: true,
    original: false,
  },
  original: {
    awsImageAcl: 'public-read',
  },
  versions: [{
    original: true,
  },
    {
      suffix: '-small',
      maxHeight: 320,
      maxWidth: 320,
    },
    {
      suffix: '-thumb',
      maxWidth: 64,
      maxHeight: 64,
      crop: {
        x: 20,
        y: 35,
        width: 100,
        height: 100,
      },
    },
  ],
});

const s3Uploader = (req, res) => {
  console.log('[ REQUEST ] ', req.file);
  const picSrc = req.file.path;
  const result = {};
  client.upload(picSrc, {}, function(err, images, meta) {
    if (err) {
      console.error('ERROR IN S3UPLOADER ', err);
    } else {
      for (var i = 0; i < images.length; i++) {
        result['image'.concat(i)] = images[i].url;
      }
      res.send(JSON.stringify(result));
      res.end();
    }
   
    fs.unlink(picSrc, function(res, err) {
      if (err) {
        console.log('Error deleting file');
      } else {
        console.log('Deleted.', res);
      }
    });
  });
};

module.exports = s3Uploader;
