const { v4: uuidv4 } = require('uuid');

const params = fileName => {
    const myFile = fileName.originalname.split('.');
    const fileType = myFile[myFile.length - 1];
    const imageParams = {
        Bucket: 'user-images-fa702d1e-de2f-49b9-bae5-5d07ec8120e3',
        Key: `${uuidv4()}.${fileType}`,
        Body: fileName.buffer
    };
    return imageParams;
};

module.exports = params;
