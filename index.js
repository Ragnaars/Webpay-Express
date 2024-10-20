const express = require("express");
const cors = require('cors');
const app = express()

app.use(cors({
    origin: 'http://localhost:4200'
}));

//import rutas
const routes = require("./routes/routes")

// Habilitar CORS para todas las rutas
app.use(cors());

// Middleware para parsear JSON
app.use(express.json());

//para poder usar variables globales
require('dotenv').config();

+

//especificar engine html
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);
app.set('views', "./views");



app.use("/", routes)


app.listen(process.env.PORT, ()=>{
    console.log("Servidor corriendo en el puerto 3000")
});

