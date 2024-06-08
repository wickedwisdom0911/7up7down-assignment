require('dotenv').config()
const express = require('express');
const cors = require('cors');

const gameRoutes = require('./routes/game.routes.js');


const app=express()

app.use(express.json());


 allowedOrigins=['https://sevenup7down-assignment-frontend.onrender.com',"http://localhost:3000"]
  

  const corsOptions = {
    origin: (origin, callback) => {
      // Check if the incoming origin is in the allowedOrigins array
      if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: ['Content-Type', 'Authorization'],
  };
  
  app.use(cors(corsOptions));
  app.options('*', cors(corsOptions));
  
  app.use(cors(corsOptions));

app.use(express.json());

app.use('/game', gameRoutes);
const path = require("path");



app.listen(process.env.PORT || 3000, ()=>{

console.log("server running")

})


