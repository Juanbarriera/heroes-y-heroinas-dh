module.exports = {
    index: (req, res)=>{
        res.send('​Ni Superman, Iron Man o La Mujer Maravilla son tan importantes cómo las y los héroes de carne y hueso que encontrarás en este sitio.');
    },
    creditos: (req, res)=>{
        res.send("Hola somos Vale y Juan, desarrolladores novatos");
    },
    error: (req, res) => {
        res.status(404).send('404 not found. <br> ¡Houston, poseemos problemas!');
    }
}