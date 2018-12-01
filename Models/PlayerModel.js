express = require('express');
mongoose = require('mongoose');

PlayerModel= new mongoose.Schema({
    nombre: String,
    juego: String,
    años: number
})

module.exports=mongoose.model('Jugador',PlayerModel);