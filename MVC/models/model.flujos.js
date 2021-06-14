const {DataTypes, Model} = require('sequelize')
const sequelize = require('../../db/db')

//Definir mi Modelo con que voy a trabajar
const Flujos = sequelize.define('flujos', {
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
    tituloFE: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    ingresosFE: {
      type: DataTypes.DECIMAL(30,2),
      allowNull: false
    }
  },{
    timestamps: false
  })

  module.exports = Flujos