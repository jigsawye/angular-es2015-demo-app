/* eslint no-console: 0 */
var path = require('path');
var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

app.use('/static', express.static(__dirname + '/dist'));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, '0.0.0.0', (err) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(`Listening at http://0.0.0.0:${port}`);
});
