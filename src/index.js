import express from 'express';
import 'dotenv/config';

const app = express();
const product = 'Fake Product';

app.get('/', (req, res) => {
  return res.json({ 
    pid: process.pid,
    env: process.env,
    ip: req.ip,
    ips: req.ips,
    headers: req.headers,
   });
});

app.listen(process.env.PORT, () =>
  console.log(`App listening on port ${process.env.PORT}.`),
);
