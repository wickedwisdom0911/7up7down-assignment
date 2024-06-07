require('dotenv').config()
const express = require('express');
const cors = require('cors');

const gameRoutes = require('./routes/game.routes.js');


const app=express()
const corsOptions = {
    origin:"https://66637ae6d370ac3b5b2b5666--sparkling-sprite-f9b1f5.netlify.app"

}
app.use(express.json());
app.use(cors(corsOptions));
app.use(express.json());

app.use('/game', gameRoutes);
const path = require("path");



app.listen(process.env.PORT || 3000, ()=>{

console.log("server running")

})


