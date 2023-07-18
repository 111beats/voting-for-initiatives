require('@babel/register');
require('dotenv').config();

const express = require('express');
const path = require('path');
const logger = require('morgan');

const app = express();

const PORT = process.env.PORT ?? 3000;

const session = require('express-session');
const FileStore = require('session-file-store')(session);

const indexRouter = require('./src/routers/index.router');
const apiRouter = require('./src/routers/api.router');

const sessionConfig = {
  name: 'voting-for-initiatives',
  store: new FileStore(),
  secret: process.env.SESSION_SECRET ?? 'Секретное слово',
  resave: false, //
  saveUninitialized: false, //
  cookie: {
    maxAge: 9999999,
    httpOnly: true,
  },
};
app.use(logger('dev'));
app.use(express.json());
app.use(session(sessionConfig));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api', apiRouter);

app.listen(PORT, () => {
  console.log(`Server was launched on ${PORT} PORT`);
});
