import express from 'express';
import bodyParser from 'body-parser';

import { routes } from './routes';
import { initDBConnection } from './models';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/api', routes);

const port: number | string = process.env.port || 4000;

initDBConnection().then(() => {
  app.listen(port, function() {
    console.log(`GOOD JOB! Example app listening on port ${port}!`);
  });
});
