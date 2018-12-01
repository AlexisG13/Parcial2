express = require('express');
mongoose = require('mongoose');
var Schema = mongoose.Schema;
var PlayerModel= new Schema({
    nombre: String,
    juego: String,
    años: number
})

module.exports=mongoose.model('Jugador',PlayerModel);