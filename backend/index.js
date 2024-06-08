require('dotenv').config()
const express = require('express');
const cors = require('cors');

const gameRoutes = require('./routes/game.routes.js');


const app=express()

app.use(express.json());
const corsOptions = {
    origin: 'https://sevenup7down-assignment-frontend.onrender.com', // replace with your domain
    methods: 'GET,HEAD,PUT,PATCH,POST',
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
    optionsSuccessStatus: 204
  };
  
  app.use(cors(corsOptions));

app.use(express.json());

app.use('/game', gameRoutes);
const path = require("path");



app.listen(process.env.PORT || 3000, ()=>{

console.log("server running")

})


