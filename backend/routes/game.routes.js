


const express = require('express');
const { rollDice } = require('../controllers/gameController.js');
;

const router=express.Router();


router.post('/roll-dice', rollDice)

module.exports=router


