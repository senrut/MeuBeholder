const express = require('express');
require('express-async-errors');

const cors = require('cors');
const helmet = require('helmet');
const errorMiddleware = require('./middlewares/errorMiddleware');
const authController = require('./controllers/authController');

const app = express();

app.use(cors());

app.use(helmet());

app.use(express.json());

app.post('/login', authController.doLogin);

app.post('/logout', authController.doLogout);

// app.use('/erro', (req, res, next) => {
//     throw new Error('Deu ruim!');
// });

app.use('/', (req, res, next) => {
    res.send('Hello World');
});

// app.use((error, req, res) => {
//     console.error(error);
// });

app.use(errorMiddleware);

module.exports = app;