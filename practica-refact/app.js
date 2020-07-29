// Require de Express
const express = require('express');

// Ejecución de Express
const app = express();

//RUTEO 
const heroesRoute = require("./routes/heroes");
app.use("/heroes", heroesRoute);

const mainRoute = require('./routes/main');
app.use("/", mainRoute);

// Levantando el Servidor en el puerto 3030
app.listen(3030, () => console.log('Server running in 3030 port'));