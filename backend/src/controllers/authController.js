const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

function doLogin(req, res, next) {
    const email = req.body.email;
    const password = req.body.password;
    console.log(email);
    console.log(password);
    if (email === 'contato@luiztools.com.br'
        && bcrypt.compareSync( password , '$2a$12$.lcQjNTm8IMVqnjrwW5/2.8oRl6IS/mmNedoO5q62TN8QMRmy0hs2')){
        const token = jwt.sign({ id: 1 }, process.env.JWT_SECRET, {
                expiresIn: parseInt(process.env.JWT_EXPIRES)
            })
            res.json({token});
    }
    else
        res.sendStatus(401);
}

function doLogout(req, res, next) {
    return res.sendStatus(200);
}

module.exports = {
    doLogin,
    doLogout
}