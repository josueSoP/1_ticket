const Joi = require('joi');

module.exports = {
    modelLogin: Joi.object().keys({
        usuario: Joi.string().alphanum().min(3).max(60).required(),
        pass: Joi.string().regex(/^[a-zA-Z0-9]{6,16}$/).min(6).required()
    }).with('usuario','pass'),

    modelRegistro: Joi.object().keys({
        nombres: Joi.string().regex(/^[ .a-zA-Z]+$/).min(3).max(60).required(),
        apellidos: Joi.string().regex(/^[ .a-zA-Z]+$/).min(3).max(60).required(),
        usuario: Joi.string().alphanum().min(3).max(60).required(),
        email: Joi.string().email().max(100).required(),
        pass: Joi.string().regex(/^[a-zA-Z0-9]{6,16}$/).min(6).required(),
    }),

    modelActualiza: Joi.object().keys({
        nombres: Joi.string().regex(/^[ .a-zA-Z]+$/).min(3).max(60).required(),
        apellidos: Joi.string().regex(/^[ .a-zA-Z]+$/).min(3).max(60).required(),
        usuario: Joi.string().alphanum().min(3).max(60).required(),
        email: Joi.string().email().max(100).required(),
        pass: Joi.string().regex(/^[a-zA-Z0-9]{6,16}$/).min(6).required(),
    }),

    modelProyecto: Joi.object().keys({
        mes: Joi.string().regex(/^[a-zA-Z]+$/).required(),
        proyecto: Joi.string().regex(/^[ .a-zA-Z0-9]+$/).required().min(3).max(60),
        version: Joi.number().required().min(1),
        
        //// pendiente
        valores: Joi.object().required().keys({
            flujoEfectivo: Joi.array().required().items(Joi.number().precision(2).min(0).required()),
            ingresos: Joi.array().items(
                Joi.object().keys({
                    concepto: Joi.string().regex(/^[ .a-zA-Z]+$/).max(30).allow(""),
                    valores: Joi.array().items(Joi.number().precision(2).min(0))
                })
            ),
            directos: Joi.array().items(
                Joi.object().keys({
                    concepto: Joi.string().regex(/^[ .a-zA-Z]+$/).max(30).allow(""),
                    valores: Joi.array().items(Joi.number().precision(2).min(0))
                })
            ),
            administrativos: Joi.array().items(
                Joi.object().keys({
                    concepto: Joi.string().regex(/^[ .a-zA-Z]+$/).max(30).allow(""),
                    valores: Joi.array().items(Joi.number().precision(2).min(0))
                })
            ),
            recursos: Joi.array().items(
                Joi.object().keys({
                    concepto: Joi.string().regex(/^[ .a-zA-Z]+$/).max(30).allow(""),
                    costoMensual: Joi.number().precision(2).min(0),
                    valores: Joi.array().items(Joi.number().min(1).max(100))
                })
            ),
        })
    })

}