require('dotenv').config();
const cors = require('cors');
const path = require('path');
const express = require('express');
const Sentry = require('@sentry/node');

const application = express();
const bodyParser = require('body-parser');

const errorHandler = require('./src/app/middlewares/errorHandler');

// port load
const port = process.env.APP_PORT || 6000;

// routes load
const adminRoute = require('./src/routes/admin');

const corsOptions = {
  optionsSuccessStatus: 200,
  origin: [
    'http://localhost:4200',
    'https://sepaket.co.id',
    'https://frontend.sepaket.co.id',
    'https://api.xendit.co/',
  ],
};



application.use(cors(corsOptions));
application.use(Sentry.Handlers.requestHandler());
application.use(Sentry.Handlers.tracingHandler());
application.use(bodyParser.urlencoded({ extended: true }));
application.use(bodyParser.text({ defaultCharset: 'utf-8' }));
// application.use(bodyParser.json({ limit: '500mb', type: 'application/json' }));
application.use(bodyParser.json({ limit: 1024102420, type: 'application/json' }));
application.use(express.json({ type: ['text/*', '*/json'] }));
application.listen(port);

application.use('/api/v1/admin', adminRoute);
application.use('/api/v1/seller', sellerRoute);
application.use('/api/v1/general', generalRoute);
application.use('/api/v1/expedition', expeditionRoute);

application.use(Sentry.Handlers.errorHandler());
application.use(express.static(path.join(__dirname)));
application.use(errorHandler);

// eslint-disable-next-line no-console
console.log(`server run on ${process.env.APP_HOST}:${process.env.APP_PORT}`);