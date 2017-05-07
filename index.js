const express = require('express');
const app = express();

const APP_URL = process.env.APP_URL || 'http://localhost:5000';
const PORT = process.env.PORT || 5000;

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.json({
    data: {
      status: 'ok',
      message: 'hello world'
    }
  });
});

app.get('/api/v1/unsplash', (req, res) => {
  res.json({
    data: {
      images: [
        `https://${APP_URL}/images/image_001.png`,
        `https://${APP_URL}/images/image_002.png`,
        `https://${APP_URL}/images/image_003.png`
      ]
    }
  });
});

app.listen(PORT, () => {
  console.log('Node app is running on port', PORT);
});
