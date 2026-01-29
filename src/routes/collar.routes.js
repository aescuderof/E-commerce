const express = require('express');
// traer controladores
const { getAllCollares, getCollarById, createCollar, updateCollar, deleteCollar } = require('../controllers/collar.controller'); 
const collarRouter = express.Router();

collarRouter.get('/', getAllCollares ) //localhost:3000/collares
collarRouter.get('/:id', getCollarById ) // localhost:3000/collares/:id
collarRouter.post('/', createCollar ) // localhost:3000/collares
collarRouter.put('/:id', updateCollar ) 
collarRouter.delete('/:id', deleteCollar ) 

module.exports = collarRouter;

