var express = require('express');
var app = express();

app.get('/smth', function(req, res) {
  res.send({
    success: true,
    data: [],
  });
});

app.listen(3000, function() {
  console.log('GOOD JOB! Example app listening on port 3000!');
});
