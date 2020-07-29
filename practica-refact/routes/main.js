const express = require('express');
const router = express.Router();
const controller = require('../controllers/mainController');

// Ruta Raíz / ➝ Home
router.get('/', controller.index);
// Ruta Créditos
router.get('/creditos', controller.creditos);
// Ruta... ¿Pára qué sirve esto? Esto sirve en caso de que se ingrese una direccion no establecida de aviso al usuario de que esta cometiendo un error
router.get('*', controller.error);
    
module.exports = router;


