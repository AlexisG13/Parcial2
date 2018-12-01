express = require('express');
mongoose = require('mongoose');
Jugador = require('../Models/PlayerModel');

PlayerController = {
    post: (req,res)=> {
        var data = {
            nombre: req.body.nombre,
            juego: req.body.juego,
            años: req.body.años
        };
        if (data.nombre != '' && data.juego != '' && data.años != '') {
            data=new Jugador({nombre:data.nombre,juego:data.juego,años:data.años});
            data.save;
            res.json({'status':200,'jugador':data});
        }
        else {
            res.json({
                'status': 500
            })
        }
    },

    getAll: function(req,res){
        players=Jugador.find({});
        res.json({'status':200,players});
    },

    delete: function(req,res){
        Jugador.findByIdAndDelete(req.id,function (err){
            if(err){
                res.json({'status':500});
            }
            else{
                res.json({
                    'status':200,
                    'jugador':req.nombre,
                    'id':req.id
                })
            }
        });

    }
}; 

module.exports = PlayerController;