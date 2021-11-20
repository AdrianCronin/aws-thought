const AWS = require('aws-sdk'); // Load the AWS SDK for Node.js

// modify the AWS config object that DynamoDB will use to connect to the region
AWS.config.update({
    region: "us-east-2",
});

// create the DynamoDB service object
const dynamodb = new AWS.DynamoDB({ apiVersion: '2012-08-10' });

// create an object that will hold the schema and metadata of the table
const params = {
    TableName: "Thoughts",
    KeySchema: [
        { AttributeName: "username", KeyType: "HASH" },  // Partition key
        { AttributeName: "createdAt", KeyType: "RANGE" }  // Sort key
    ],
    AttributeDefinitions: [
        { AttributeName: "username", AttributeType: "S" }, // S === String
        { AttributeName: "createdAt", AttributeType: "N" } // N === Number
    ],
    ProvisionedThroughput: {
        ReadCapacityUnits: 10,
        WriteCapacityUnits: 10
    }
};

// make a call to the DynamoDB instance
dynamodb.createTable(params, (err, data) => {
    if (err) {
        console.error("Unable to create table. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("Created table. Table description JSON:", JSON.stringify(data, null, 2));
    }
});