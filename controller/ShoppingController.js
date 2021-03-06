const models = require('../models')

exports.Create = (req, res) => {
    const { createddate, name } = req.body.shopping
    models.Shopping.create({
        create_date : createddate, name
    }).then(result => {
        res.send({
            createddate : createddate,
            id : result.id,
            name : name
        })
    }).catch(err => {
        res.status(500).send({
            status : 'error',
            message : err
        })
    })
}

exports.getAll = (req, res) => {
    models.Shopping.findAll({raw : true})
        .then(result => {
            res.send({
                status : 'sukses',
                data : result
            })
        }).catch(err => {
        res.send({
            status : 'error',
            data : err
        })
    })
}

exports.getById = (req, res) => {
    const IdShopping = req.params.id
    models.Shopping.findOne({where : { id : IdShopping}})
        .then(result => {
            res.send({
                status : 'sukses',
                data : result
            })
        }).catch(err => {
        res.send({
            status : 'error',
            data : err
        })
    })
}

exports.Update = (req, res) => {
    const IdShopping = req.params.id
    const { createddate, name } = req.body.shopping
    models.Shopping.update({createddate, name}, {where : { id : IdShopping }})
        .then(result => {
            res.send({
                status : 'sukses',
                data : result
            })
        }).catch(err => {
            res.send({
                status : 'error',
                data : err
            })
        })
}

exports.delete = (req, res) => {
    const IdShopping = req.params.id
    models.Shopping.destroy({where : {id : IdShopping}})
        .then(result => {
            res.send({
                status : 'sukses menghapus',
                data : result
            })
        }).catch(err => {
        res.send({
            status : 'error',
            data : err
        })
    })
}
