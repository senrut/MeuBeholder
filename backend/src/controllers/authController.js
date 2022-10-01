const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

function doLogin(req, res, next) {

  const email = req.body.email;
  const password = req.body.password;
  if (email === 'contato@luiztools.com.br'
    && bcrypt.compareSync( password, '$2a$12$/nE57st4sSt54nAQkOFPQe96w9UI0OMNHrEhAB9YSnRf.CkGQQQPe')) {
    const token = jwt.sign({ id: 1 }, process.env.JWT_SECRET, {
      expiresIn: parseInt(process.env.JWT_EXPIRES)
    })
    res.json({ token });

    //    res.sendStatus(200);

  }
  else {
    res.sendStatus(401);
  }
}

function doLogout(req, res, next) {

}

module.exports = {
  doLogin,
  doLogout
}
