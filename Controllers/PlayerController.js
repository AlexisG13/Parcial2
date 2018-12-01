express = require('express');
mongoose = require('mongoose');
jugador = require('./Models/Jugador');

PlayerController={};

PlayerController.post=()=>{
    var data={
        nombre:res.nombre,
        juego:res.juego,
        años:res.años
    };
    if(data.nombre!=''&&data.juego!=''&&data.años!=''){
        jugador.save(data);
    }
}

module.exports=PlayerController;
