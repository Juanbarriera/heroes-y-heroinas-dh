const express = require('express');
const router = express.Router();
const controller = require('../controllers/heroesController');


// Ruta /heroes ➝ se envía todo el array y Express lo parsea para el browser como JSON :D
router.get('/', controller.index);

//COMO LO PENSAMOS PERO NO SALIÓ
//Ruta /heroes/n ➝ se envía el nombre y profesión del héroe solicitado
router.get('/:id', controller.getByName);


// Ruta /heroes/n/bio ➝ se envía la bio del héroe solicitado
router.get('/:id/resenia/:tipo?', controller.getByRes);


module.exports = router;