express = require('express');
mongoose = require('mongoose');
var Schema = mongoose.Schema;
var PlayerModel= new Schema({
    nombre: String,
    juego: String,
    años: Number  
})

module.exports=mongoose.model('Jugador',PlayerModel);