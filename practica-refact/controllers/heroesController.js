// Require de FS
const fs = require('fs');
// Leyendo y parseando (en array) el contenido de heroes.json
const heroes = JSON.parse(fs.readFileSync(__dirname + '/../data/heroes.json','utf-8'));

module.exports = {
    index: (req, res) => { res.send(heroes); },

    getByName: (req, res) => {
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
    },

    getByRes: (req, res) => {
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
    }
}