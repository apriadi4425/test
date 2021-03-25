const models = require('../models')
var md5 = require('md5');

exports.SignUp = (req, res) => {
    const { username, email, encrypted_password, phone, address, city, country, name, postcode} = req.body.user
    models.User.create({
        username, email, password : md5(encrypted_password), phone, address, city, country, name, postcode
    }).then(result => {
        res.send({

        })
    })
}
