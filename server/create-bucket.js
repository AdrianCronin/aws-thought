const AWS = require('aws-sdk'); // Load the AWS SDK for Node.js
const { v4: uuidv4 } = require('uuid');

AWS.config.update({ region: 'us-east-2' }); // Set the region

// Create S3 service object
const s3 = new AWS.S3({ apiVersion: '2006-03-01' });

// Create the parameters for calling createBucket
var bucketParams = {
    Bucket: "user-images-" + uuidv4(),
};

// call S3 to create the bucket
s3.createBucket(bucketParams, (err, data) => {
    if (err) {
        console.log("Error", err);
    } else {
        console.log("Success");
    }
});