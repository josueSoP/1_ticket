const Proyecto = require('../models/model.proyectos');
const Flujos = require('../models/model.flujos');
const Estados = require('../models/model.estados');
const Ingresos = require('../models/model.ingresos');
const CostosDir = require('../models/model.cosDir');
const Gastos = require('../models/model.gastos');
const Recursos = require('../models/model.recursos');

/////////////////LISTA DE PROYECTOS //////////////////
module.exports.listarProyectos = async ()=>{
    try {
        let resultado = await Proyecto.listar()
        return resultado
    }catch (err){
        console.log('Error de modelos' + err)
        throw new Error ('Ocurrio un problema en el controlador listar proyectos')
    }
} 





//////////////// GUARDAR NUEVO PRESUPUESTO  //////////////////
module.exports.guardarPresupuesto = async (data) => {
    try {
        let nuevoPresupuesto = await Proyecto.create(({ mes:data.mes, proyecto:data.proyecto, versiones:data.versiones }));
        // let resultFlujo = await Flujos.create(({tituloFE:data.tituloFE, ingresosFE:data.ingresosFE, proyecto_id: nuevoPresupuesto.id}));
        await Flujos.create(({tituloFE:data.tituloFE, ingresosFE:data.ingresosFE, proyecto_id: nuevoPresupuesto.id}));
        await Estados.create(({ tituloER:data.tituloER, proyecto_id: nuevoPresupuesto.id}));
        await Ingresos.create(({ tituloIn:data.tituloIn, conceptoIn:data.conceptoIn,proyecto_id: nuevoPresupuesto.id }));
        await CostosDir.create(({ opcionCD:data.opcionCD,proyecto_id: nuevoPresupuesto.id }));
        await Gastos.create(({ opcionGA:data.opcionGA,proyecto_id: nuevoPresupuesto.id }));
        await Recursos.create(({ nombreRe:data.nombreRe, costosRe:data.costosRe,proyecto_id: nuevoPresupuesto.id }));
        return true;
        // return nuevoPresupuesto;
        // return resultado, resFlujo, resEstado, resIngreso, resCostosDir, resGastos, resRecursos;
    }catch (err){
        throw new Error ('Controlador: Error al guardar proyecto en la DB')
    }
};

/////////////// EDITAR UN PRESUPUESTO ///////////////////
module.exports.nuevoPresupuesto = async ()=>{
    try {
        let resultado = await Flujo.listarNuevo()
        return resultado
    }catch (err){
        console.log('Error de modelos' + err)
        throw new Error ('Controlador: Error al Editar proyecto en la DB')
    }
} 









 ///////////MODULO PARA ELIMINAR UN REGISTRO ////////////
 module.exports.eliminarProyecto = async (data) => {
    try {//borrado logico en vez de destroy usamos update
        await Proyecto.destroy({
            where: { id : data}
        })
        return true;
    }catch (err){
        throw new Error ('No se pudo eliminar el proyecto seleccionado')
    }
};


// module.exports.actualizarBudget = async (id, datos) => {
//     const { proyecto, version, estado, autor, mes, anio, valores } = datos;
//     let actualizaBudget = new PresupuestoModel(proyecto, version, estado, autor, mes, anio, valores);      
//     try {
//         let resultado = await actualizaBudget.modificarPresupuesto(id);
//         return resultado;
//     } catch (err) {
//         throw new Error ('Controlador: Error al Editar proyecto en la DB')
//     }   
// }