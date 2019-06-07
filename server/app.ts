import express = require('express');

const app = express();

app.get('/smth', function(req: express.Request, res: express.Response) {
  res.send({
    success: true,
    data: 'SUCCESS REQUEST',
  });
});

const port: number | string = process.env.port || 4000;

app.listen(port, function() {
  console.log(`GOOD JOB! Example app listening on port ${port}!`);
});
