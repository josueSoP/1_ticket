//modulos
const express = require('express');
const app = express();
require('dotenv').config();

//carga de rutas
const sequelize = require('./db/db');
const vistaUsuarios = require('./MVC/views/view.usuarios');
const vistaProyecto = require('./MVC/views/view.proyecto');
const Usuarios = require('./MVC/models/model.usuarios');
const Proyecto = require('./MVC/models/model.proyectos');
const Flujos = require('./MVC/models/model.flujos');
const Estados = require('./MVC/models/model.estados');
const Ingresos = require('./MVC/models/model.ingresos');
const CostosDir = require('./MVC/models/model.cosDir');
const Gastos = require('./MVC/models/model.gastos');
const Recursos = require('./MVC/models/model.recursos');

//middlewares
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(express.static(__dirname + '/public'))
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')

//middleware para captura de errores globales.
app.use((err, req, res, next)=> {
    console.log(err);
    if (!err){
        return next();
    }

    return res.status(500).json('Se produjo un error inesperado, intente nuevamente')
});

//rutas o vistas
vistaProyecto(app);
vistaUsuarios(app);

//Iniciar el Servidor
async function inicioServidor() {
    try {
        //console.log(process.env.DB_USER)
        await Usuarios.sync({alter:true});
        await Proyecto.sync({alter:true});
        await Flujos.sync({alter:true});
        await Estados.sync({alter:true});
        await Ingresos.sync({alter:true});
        await CostosDir.sync({alter:true});
        await Gastos.sync({alter:true});
        await Recursos.sync({alter:true});
        
        // creaciontablas();
  
        await sequelize.authenticate();
        console.log('Conexion con la DB correcta!')
        app.listen(process.env.PORT, function (){
            console.log(`Sistema iniciado en el puerto ${process.env.PORT}`)
        })
    }catch (err){
        console.log(err)
        console.log('No se pudo conectar con la DB')
    }
}

inicioServidor();

//creacion automatica de tablas para prubea
async function creaciontablas(){
    await Usuarios.findOrCreate({
        where: {
            nombres: 'josue', 
            apellidos: 'soto', 
            email: 'josue@mail.com', 
            usuario: 'josu', 
            pass: 'jo123'
        }
    });
    await Proyecto.findOrCreate({
        where: {
            mes:'2021-01',
            proyecto:'migracion de correo electronco a la nube',
            versiones:2.1
        }
    });
    await Flujos.findOrCreate({
        where: {
            proyecto_id: 1,
            tituloFE:'tituloFE',
            ingresosFE:200.1
        }
    });
    await Estados.findOrCreate({
        where: {
            proyecto_id: 1,
            tituloER:'Estado R1' 
        }
    });
    await Ingresos.findOrCreate({
        where: {
            proyecto_id: 1,
            tituloIn:'Ingresos 1',
            conceptoIn: 100.01
        }
    });
    await CostosDir.findOrCreate({
        where: {
            proyecto_id: 1,
            opcionCD: 1
        }
    });
    await Gastos.findOrCreate({
        where: {
            proyecto_id: 1,
            opcionGA: 3
        }
    });
    await Recursos.findOrCreate({
        where: {
            proyecto_id: 1,
            nombreRe:'Recurso 1',
            costosRe: 1424.01
        }
    });
}