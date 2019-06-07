import express from 'express';

const app = express();

app.get('/smth', function(req: express.Request, res: express.Response) {
  res.send({
    success: true,
    data: [],
  });
});

app.listen(3000, function() {
  console.log('GOOD JOB! Example app listening on port 3000!');
});
