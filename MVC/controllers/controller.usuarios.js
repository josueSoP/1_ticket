const Usuarios = require('../models/model.usuarios');
const jwt = require('jsonwebtoken');

//modulos para login
module.exports.chequearUsuario = async (usr)=>{
    let usrchk = usr
    try {
        let resultado =  await Usuarios.existenciaDeUsuario(usrchk)
        if (resultado) {
            let result =  await Usuarios.usuarioAutenticado(usrchk)
            return result
        }else {
            throw new Error ('Contraseña Incorrecta')
        }
    }catch (err){
        throw new Error ('No existe el usuario')
    }
}

module.exports.datosUsuario = async (usr) => {
    let usrchk = usr
    try {
        let resultado =  await Usuarios.recuperarInfoUser(usrchk)
        if (resultado) {
            return resultado
        }else {
            throw new Error ('No hay datos de Usuario')
        }
    }catch (err){
        console.log(err)
        throw new Error (' no semuy bien que paso')
    }
}

module.exports.generaToken = async (data)=>{
    try {
        let resultado = jwt.sign({
            exp: Math.floor(Date.now() / 1000) + (60 * 60),
            data
        }, process.env.SECRET_KEY
        )
        return resultado
    }catch (err){
        console.log(err)
        throw new Error (err)
    }
}

//modulo para la Lista de Usuarios Registrados //////////
module.exports.listarRegistros = async ()=>{
    try {
        let resultado = await Usuarios.listar()
        return resultado
        
    }catch (err){
        console.log('Error de modelos' + err)
        throw new Error ('Ocurrio un problema en el controlador listar usuarios')
    }
} 

///////// MODULO PARA CREAR UN REGISTRO //////////////
module.exports.guardarRegistro = async (data) => {
    try {
        let resultado = await Usuarios.nuevoUsuario(data)
        return resultado;
    }catch (err){
        throw new Error ('Ocurrio un problema al realizar el alta en la DB')
    }
};

////////////MODULOS PARA MODIFICAR USUARIO//////////////
//Seleccionar un solo registro por su ID para poderlo modificar
module.exports.buscarRegistro = async (data)=>{
    try {
        let resultado = await Usuarios.buscarUsuarios(data)
        return resultado
    }catch (err) {
        throw new Error ('Ocurrio un problema en el controlador al BUSCAR usuario')
    }
}

//guardar modificacion
module.exports.modificarUsuario = async (data) => {
    try {
        await Usuarios.update({nombres: data.nombres, apellidos: data.apellidos, email: data.email, usuario: data.usuario, pass: data.pass}, {where: { id : data.id}})
        return true;
    }catch (err){
        throw new Error ('No se pudo actualizar el producto seleccionado')
    }
}

 ///////////MODULO PARA ELIMINAR UN REGISTRO ////////////
module.exports.eliminarRegistro = async (data) => {
    try {
        await Usuarios.destroy({
            where: { id : data}
        })
        return true;
    }catch (err){
        throw new Error ('No se pudo eliminar el usuario seleccionado')
    }
};