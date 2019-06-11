import * as express from 'express';

import { routes } from './routes';

const app = express();

app.use('/api/', routes);

const port: number | string = process.env.port || 4000;
app.listen(port, function() {
  console.log(`GOOD JOB! Example app listening on port ${port}!`);
});
