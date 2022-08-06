const fs = require('fs');
const express = require('express');
const app = express();

const staticConfig = JSON.parse(fs.readFileSync('static_config.json'));

app.get('/static/new_feature.html', (req, res) => {
  if (!staticConfig.newFeatureLaunched) {
    res.status(401).send('You are unautorized');
    return;
  }
  res.send('<html>Im a new Feature</html>\n');
});

app.listen(5002, () => console.log('listening on port 5002'));
