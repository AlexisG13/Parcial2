express = require('express');
mongoose = require('mongoose');
jugador = require('../Models/Jugador');

PlayerController={};

PlayerController.post=function(req,res){
    var data={
        nombre:res.nombre,
        juego:res.juego,
        años:res.años
    };
    if(data.nombre!=''&&data.juego!=''&&data.años!=''){
        data= new jugador;
        jugador.save(function(err,jugador){
            if(err){
                res.json({
                    'error':er,
                    'status':500
                });
            }
            else{
                res.json({
                    'status':400
                })
            }
        })
    }
}

module.exports=PlayerController;
