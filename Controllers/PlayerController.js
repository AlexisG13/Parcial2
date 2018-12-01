express = require('express');
mongoose = require('mongoose');
Jugador = require('../Models/PlayerModel');

PlayerController = {
    post: function(req,res){
        res.send('Hello there');
    }

/*
    post: function (req, res) {
        var data = {
            nombre: res.nombre,
            juego: res.juego,
            años: res.años
        };
        if (data.nombre != '' && data.juego != '' && data.años != '') {
            data = new jugador;
            jugador.save(function (err, jugador) {
                if (err) {
                    res.json({
                        'error': er,
                        'status': 500
                    });
                }
                else {
                    res.json({
                        'status': 400
                    })
                }
            })
        }
        else {
            res.json({
                'status': 400
            })
        }
    }*/
}; 

module.exports = PlayerController;
