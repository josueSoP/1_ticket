const {DataTypes, Model} = require('sequelize')
const sequelize = require('../../db/db')

const Flujos = require('./model.flujos');
const Estados = require('./model.estados');
const Ingresos = require('./model.ingresos');
const CostosDir = require('./model.cosDir');
const Gastos = require('./model.gastos');
const Recursos = require('./model.recursos');

//Definir mi Modelo con que voy a trabajar
const Proyecto = sequelize.define('proyectos', {
    id : {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    mes : {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    proyecto: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    versiones: {
      type: DataTypes.DECIMAL(30,2),
      allowNull: false
    }
  },{
    timestamps: true
  })

  Proyecto.hasMany(Flujos, {
    foreignKey: {
        name: 'proyecto_id',
        type: DataTypes.INTEGER,
        allowNull: false
    },
    onDelete: 'CASCADE'
  });
  
  Proyecto.hasMany(Estados, {
    foreignKey: {
        name: 'proyecto_id',
        type: DataTypes.INTEGER,
        allowNull: false
    },
    onDelete: 'CASCADE'
  });
  
  Proyecto.hasMany(Ingresos, {
    foreignKey: {
        name: 'proyecto_id',
        type: DataTypes.INTEGER,
        allowNull: false
    },
    onDelete: 'CASCADE'
  });
  
  Proyecto.hasMany(CostosDir, {
    foreignKey: {
        name: 'proyecto_id',
        type: DataTypes.INTEGER,
        allowNull: false
    },
    onDelete: 'CASCADE'
  });
  
  Proyecto.hasMany(Gastos, {
    foreignKey: {
        name: 'proyecto_id',
        type: DataTypes.INTEGER,
        allowNull: false
    },
    onDelete: 'CASCADE'
  });

  Proyecto.hasMany(Recursos, {
    foreignKey: {
        name: 'proyecto_id',
        type: DataTypes.INTEGER,
        allowNull: false
    },
    onDelete: 'CASCADE'
  });

  module.exports = Proyecto

  module.exports.listar = async () => {
    let resultado = await sequelize.query('SELECT * FROM proyectos')
    return resultado[0]
  }