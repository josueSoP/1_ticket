const {DataTypes, Model} = require('sequelize')
const sequelize = require('../../db/db')

//Definir mi Modelo con que voy a trabajar
const Ingresos = sequelize.define('ingresos', {
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
    tituloIn: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    conceptoIn: {
      type: DataTypes.DECIMAL(30,2),
      allowNull: false
    }  
  },{
    timestamps: false
  })

  module.exports = Ingresos

  
