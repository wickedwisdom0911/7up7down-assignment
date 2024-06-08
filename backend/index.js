require('dotenv').config()
const express = require('express');
const cors = require('cors');

const gameRoutes = require('./routes/game.routes.js');


const app=express()

app.use(express.json());


  app.use(cors());
  app.use(express.json());
  


app.use('/game', gameRoutes);
const path = require("path");



app.listen(process.env.PORT || 3000, ()=>{

console.log("server running")

})


