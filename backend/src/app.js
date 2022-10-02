const express = require('express');
require('express-async-errors');
const cors = require('cors');
const helmet = require('helmet');
const authMiddleware = require('./middlewares/authMiddleware');
const authController = require('./controllers/authController');
const settingsController = require('./controllers/settingsController');

const app = express();

app.use(cors());

app.use(helmet());

app.use(express.json());

// app.use('/beholder', ( req, res, next) => {
//   res.send('Hello Beholder');
// })


app.post('/login', authController.doLogin)

//  app.post('/login', (req, res, next) => {
  // const email = req.body.email;
  // const password = req.body.password;
  // if (email === 'contato@luiztools.com.br'
  //   && password === '123456') {
  //   res.sendStatus(200);
  // }
  // else
  //   res.sendStatus(401);
// app.use('/erro', (req, res, next) => {
//   throw new Error('Deu ruim!');
// })

app.get('/settings', authMiddleware, settingsController.getSettings);

app.post('/logout', authController.doLogout);

// app.post('/logout', (req, res, next) => {
//   res.sendStatus(200);
// })

app.use('/', (req, res, next) => {
  res.send('Hello world');
})

const errorMiddleware = require('./middlewares/errorMiddleware');

app.use(errorMiddleware);

module.exports = app;