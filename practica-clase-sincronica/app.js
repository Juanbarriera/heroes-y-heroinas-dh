// Require de Express
const express = require('express');

// Require de FS
const fs = require('fs');

// Ejecución de Express
const app = express();

// Levantando el Servidor en el puerto 3030
app.listen(3031, () => console.log('Server running in 3030 port'));

// Leyendo y parseando (en array) el contenido de heroes.json
const heroes = JSON.parse(fs.readFileSync(__dirname + '/data/heroes.json','utf-8'));

// Ruta Raíz / ➝ Home
app.get('/', (req, res)=>{
	res.send('​Ni Superman, Iron Man o La Mujer Maravilla son tan importantes cómo las y los héroes de carne y hueso que encontrarás en este sitio.');
});

// Ruta /heroes ➝ se envía todo el array y Express lo parsea para el browser como JSON :D
app.get('/heroes', (req, res) => {
	res.send(heroes);
});
//COMO LO PENSAMOS PERO NO SALIÓ
//Ruta /heroes/n ➝ se envía el nombre y profesión del héroe solicitado
 app.get('/heroes/:id', (req, res) => {
	// Acá lo primero será encontrar al héroe que corresponda
	let heroe = heroes.find( heroe => heroe.id == req.params.id);
	// Si se encuentra al héroe se envía el nombre y su profesión
	if(heroe != undefined){
		let mensaje = "Hola mi nombre es " + heroe.nombre + " y soy " + heroe.profesion;
		res.send(mensaje);
	}
	// Si NO se encuentra se envía el mensaje de no encontrado
	else{
		let mensaje = "No tenemos en nuestra base ningún heroe o heroína con ese Id";
		res.send(mensaje);
	}	
});

// // Ruta /heroes/n/bio ➝ se envía la bio del héroe solicitado
app.get('/bio/:id/resenia/:tipo?', (req, res) => {
	// Acá lo primero será encontrar al héroe que corresponda
	let heroe = heroes.find( heroe => heroe.id == req.params.id);
	let id = req.params.id - 1;
	// Si se encuentra al héroe:	
	if(heroe != undefined){
		// Se pregunta si vino el parámetro Y el valor esperado y se envía la información 
		if(req.params.tipo == "completa"){
			res.send(heroe.resenia);
		}
		// Si nó vino el parámetro se envia las primeras 30 palabras de la reseña
		else{
		let resenia = heroe.resenia;
		res.send(resenia.slice(0, 70));
		}	
	}
	// Si NO se encuentra al héroe se envía un mensaje
	else{
			let mensaje = "No tenemos en nuestra base ningún heroe o heroína con ese Id";
			res.send(mensaje);
		}	
	});

// // Ruta Créditos
app.get('/creditos', (req, res)=>{
res.send("Hola somos Vale y Juan, desarrolladores novatos");
});

// // Ruta... ¿Pára qué sirve esto? Esto sirve en caso de que se ingrese una direccion no establecida de aviso al usuario de que esta cometiendo un error
app.get('*', (req, res) => {
res.status(404).send('404 not found. <br> ¡Houston, poseemos problemas!');
});