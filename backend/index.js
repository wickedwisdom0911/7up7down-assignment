require('dotenv').config()
const express = require('express');
const cors = require('cors');

const gameRoutes = require('./routes/game.routes.js');


const app=express()
const corsOptions = {
    origin: "http://localhost:3000" // frontend URI (ReactJS)
}
app.use(express.json());
app.use(cors(corsOptions));app.use(express.json());

app.use('/game', gameRoutes);
const path = require("path");



app.listen(process.env.PORT || 3000, ()=>{

console.log("server running")

})


