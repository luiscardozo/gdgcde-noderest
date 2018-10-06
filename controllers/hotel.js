Hotel = require('../models').Hotel;

module.exports = {
    buscarTodos(req, res){
        Hotel.findAll()
        .then(function(result){
            res.status(200).json(result);
        })
        .catch(function(err) {
            res.status(500).json(err);
        });
    },

    buscarPorId(req,res){
        Hotel.findById(req.params.id)
        .then(function(result) {
            res.status(200).json(result);
        })
        .catch(function(err){
            res.status(500).json(err);
        });
    },

    crear(req, res){
        Hotel.create(req.body)
        .then(function(result){
            res.status(200).json(result);
        })
        .catch(function(err){
            res.status(500).json(err);
        });
    },

    actualizar(req, res){
        Hotel.update(req.body,{
            where: {
                id: req.params.id
            }
        })
        .then(function(result){
            res.status(200).json(result);
        })
        .catch(function(err){
            res.status(500).json(err);
        });
    },

    eliminar(req, res){
        Hotel.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(function(result){
            res.status(200).json(result);
        })
        .catch(function(err){
            res.status(500).json(err);
        });
    }
};