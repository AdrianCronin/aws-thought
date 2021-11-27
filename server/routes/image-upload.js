const express = require('express');
const router = express.Router();
const multer = require('multer');
const AWS = require('aws-sdk');

// temporary storage container that holds the image file until it is ready to be uploaded to the S3 bucket
const storage = multer.memoryStorage({
    destination: function (req, file, callback) {
        callback(null, '');
    }
});

//  stores the image data from the form data received by the POST route
//  'single' method defines this upload function will only receive one image
//  also defines the key of image object as 'image'
const upload = multer({ storage }).single('image');

// instantiate the S3 service object to communicate with the S3 web service, which will allow us to upload the image to the S3 bucket
const s3 = new AWS.S3({
    apiVersion: '2006-03-01'
});

// Image Upload Route
router.post('/image-upload', upload, (req, res) => {
    // set up params config
    // set up S3 service call
});