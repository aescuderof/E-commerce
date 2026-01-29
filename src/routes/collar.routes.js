const express = require('express');
// traer controladores
const { getAllCollares, getCollarById, createCollar, updateCollar, deleteCollar } = require('../controllers/guitar.controller'); 
const guitarRouter = express.Router();

guitarRouter.get('/', getAllCollares ) //localhost:3000/collares
guitarRouter.get('/:id', getCollarById ) // localhost:3000/collares/:id
guitarRouter.post('/', createCollar ) // localhost:3000/collares
guitarRouter.put('/:id', updateCollar ) 
guitarRouter.delete('/:id', deleteCollar ) 

module.exports = guitarRouter;

