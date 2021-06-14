const {DataTypes, Model} = require('sequelize')
const sequelize = require('../../db/db')

//Definir mi Modelo con que voy a trabajar
const Gastos = sequelize.define('gastos', {
    id : {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    proyecto_id: {
      type: DataTypes.INTEGER,
      references: {
          model: 'proyectos',
          key: 'id'
      },
      allowNull: false        
    },
    opcionGA: {
      type: DataTypes.INTEGER,
      allowNull: false
    }  
  },{
    timestamps: false
  })

  module.exports = Gastos


