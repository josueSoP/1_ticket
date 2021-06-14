const controladorUsuarios = require('../controllers/controller.usuarios')
const midd = require('../../middleware/midd.verificacion');

module.exports = async (app)=> {
    ////////////// LOGIN DE USUARIOS /////////////////////////
    app.get('/login', async (req,res)=>{
        try{
            res.render('login/login.ejs');
        }catch (err){
            res.estatus(400).json('No se puede mostrar')
        }
    })

    app.post('/login', async (req,res)=>{
        let usuario = req.body
        try {
            let resultado = await controladorUsuarios.chequearUsuario(usuario)
            if (resultado){
                let usuarioInfo = await controladorUsuarios.datosUsuario(usuario)
                let tokenResult = await controladorUsuarios.generaToken(usuario)
                res.json({ token: tokenResult, user: usuarioInfo })
            }else {
                throw new Error ("Contraseña Incorrecta")
            }
        }catch (err){
            res.status(400).json({ error: err.message})
        }
    })

////////////////////// REGISTRO de USUARIOS///////////////////////////

    //ruta para enlistar
    app.get('/usuarios', async(req,res)=> {
        try {
            let resultado = await controladorUsuarios.listarRegistros()
            res.render('login/listaRegistro.ejs', {results:resultado});
        }catch (err){
            console.log(err)
            res.status(400).json('Error al dirigirse a la ruta vistas')
        }
    })
        
    //Rutas para agregar y guardar un nuevo registro
    app.get('/create',  async (req,res)=>{
        try{
            res.render('login/registro.ejs')
        }catch (err){
            console.log(err)
            res.status(400).json('Error al dirigirse a la pagina CREAR')
        }
    })

    app.post('/save', async (req,res)=>{
        try{
            let resultado = await controladorUsuarios.guardarRegistro(req.body)
            if(resultado) {
                res.redirect('/')
                console.log('Usuario Agregado Correctamente');
            }
        }catch (err){
            res.status(400).json('No se puedo crear el usuarios')
        }
    })

    // rutas para modificar un usuario
    app.get('/edit/:id', midd.verificacionUsuario, async (req,res)=>{
        let data = req.params.id;
        try {
            let resultado = await controladorUsuarios.buscarRegistro(data)
            res.render('login/editaRegistro.ejs', {result:resultado.dataValues })
        }catch (err){
            res.status(400).json('Error al dirigirse a la pagina EDITAR')
        }
    })

    app.post('/update', midd.verificacionUsuario, async (req, res)=>{
        try {
            let resultado = await controladorUsuarios.modificarUsuario(req.body);
            if(resultado){
                res.redirect('/login');
            }
        } catch (error) {
            res.status(400).json('No se puedo modificar el usuarios')
        }
    });

    // ruta para eliminar usuario
    app.get('/delete/:id', midd.verificacionUsuario, async (req,res)=>{
        let data = req.params.id;
        try {
            let resultado = await controladorUsuarios.eliminarRegistro(data)
            if(resultado){
                res.redirect('/usuarios');
            }      
        }catch (err){
            res.status(400).json('No se puedo eliminar el usuario')
        }
    })
}
