require('dotenv').config()
const express = require('express');
const cors = require('cors');

const gameRoutes = require('./routes/game.routes.js');


const app=express()

app.use(express.json());


allowedOrigins=['https://sevenup7down-assignment-frontend.onrender.com',"http://localhost:3000"]
  

const corsOptions = {
    origin: (origin, callback) => {
      // Allow requests with no origin, e.g., mobile apps, curl requests
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    allowedHeaders: ['Content-Type', 'Authorization'],
    optionsSuccessStatus: 200 // Some legacy browsers (IE11, various SmartTVs) choke on 204
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


