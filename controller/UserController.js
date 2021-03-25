const models = require('../models')
var md5 = require('md5');

const accessTokenSecret = process.env.SECRET_KEY;

exports.SignUp = (req, res) => {
    const { username, email, encrypted_password, phone, address, city, country, name, postcode} = req.body.user
    models.User.create({
        username, email, password : md5(encrypted_password), phone, address, city, country, name, postcode
    }).then(result => {
        const accessToken = jwt.sign({ username: username }, accessTokenSecret);
        res.send({
            email : email,
            token : accessToken,
            username : username
        })
    }).catch(err => {
        res.status(500).send({
            message : err
        })
    })
}


exports.SignIn = async (req, res) => {
    const {email, password} = req.body
    const User = await models.User.findOne({
        where : {
            email : email,
            password : md5(password)
        }
    })

    if(User !== null){
        const DataUser = User.dataValues;
        const accessToken = jwt.sign({ username: DataUser.username}, accessTokenSecret);
        res.status(200).send({
            email : email,
            token : accessToken,
            username : DataUser.username
        })

    }else{
        res.status(401).send({
            status : 401,
            data : {
                message : 'Username atau password salah'
            }
        })
    }
}
