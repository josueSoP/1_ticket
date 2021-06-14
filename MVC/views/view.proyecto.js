const controladorProyectos = require('../controllers/controller.proyecto')
// const middAuth = require('../../middleware/middVerificacion');

module.exports = async (app)=> {
////////// RUTA: TABLA PRINCIPAL DE PROYECTOS ////////////
    app.get('/', async(req,res)=> {
        try {
            let resultado = await controladorProyectos.listarProyectos()
            res.render('listaPrincipal.ejs', {results:resultado});
            // res.status(200).send({message:'Lista de proyectos correcto'});
        }catch (err){
            console.log(err)
            res.status(400).send({message:'Error al dirigirse a la ruta /'});
        }
    })

////////// RUTA: CREAR Y GUARDAR NUEVO PROYECTO: muestra las tablas  ///////////
    app.get('/nuevoProyecto', async (req,res)=>{
        try{
            res.render('listaTablas.ejs');
        }catch (err){
            console.log(err)
            res.status(400).send({message:'Error en la ruta /nuevoProyecto'});
        }
    })
    
    app.post('/guardarProyecto', async (req,res)=>{
        try{
            let resultado = await controladorProyectos.guardarPresupuesto(req.body)
            if(resultado) {
                console.log('Proyecto guardado Correctamente');
                // res.redirect('/');
                res.status(200).send({message:'presupuesto guardado'});
                // res.status(200).send({resultado});
                // res.status(200).send({resultado, resFlujo, resEstado, resIngreso, resCostosDir, resGastos, resRecursos});
            }
        }catch (err){
            res.status(400).send({message:'Error en la ruta /guardarProyecto'});
        }
    })

/////////// RUTA: ACTUALIZAR UN PRESUPUESTO //////////// 
    app.get('/editarProyecto/:id', async (req,res)=>{
        try{
            // res.redirect('/');
            res.status(200).send({message:'Proyecto editado'});
        }catch (err){
            console.log(err)
            res.status(400).send({message:'Error en la ruta /editarProyecto'});
        }
    })

/////////// RUTA: ELIMINAR UN PRESUPUESTO ////////////////////
    app.get('/eliminarProyecto/:id', async (req,res)=>{
        let data = req.params.id;
        try {
            let resultado = await controladorProyectos.eliminarProyecto(data)
            if(resultado){
                // res.redirect('/');
                res.status(200).send({message:'proyecto eliminado correctamente'});
            }      
        }catch (err){
            res.status(400).send({message:'Error en la ruta /eliminarProyecto'});

        }
    })
   
}

 // app.post('/actualizarPresupuesto/:id', async (req, res) => {
    //     let id = req.params.id;
    //     let datos = req.body;
    //     try {
    //         let resultado = await controladorPresupuesto.actualizarBudget(id, datos);
    //         if(resultado){
    //             // res.redirect('/');
    //             res.status(200).send({message:'Proyecto editado'});
    //         }
    //     } catch (error) {
    //         res.status(400).send({message:'Error en la ruta /editarProyecto'});
    //     }
    // })