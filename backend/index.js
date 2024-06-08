require('dotenv').config()
const express = require('express');
const cors = require('cors');

const gameRoutes = require('./routes/game.routes.js');


const app=express()

app.use(express.json());


allowedOrigins=['https://sevenup7down-assignment-frontend.onrender.com',"http://localhost:3000"]
  

const corsOptions = {
    origin: (origin, callback) => {
      if (!origin) return callback(null, true); // Allow requests with no origin (like mobile apps, curl)
      if (allowedOrigins.indexOf(origin) === -1) {
        const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    allowedHeaders: ['Content-Type', 'Authorization'],
    preflightContinue: false,
    optionsSuccessStatus: 204
  };
  
  // Use CORS with the specified options
  app.use(cors(corsOptions));
  app.use(express.json());
  
  // Handle preflight requests
  app.options('*', cors(corsOptions));
  

app.use('/game', gameRoutes);
const path = require("path");



app.listen(process.env.PORT || 3000, ()=>{

console.log("server running")

})


