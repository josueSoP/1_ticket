const {DataTypes, Model} = require('sequelize')
const sequelize = require('../../db/db')

//Definir mi Modelo con que voy a trabajar
const Estados = sequelize.define('estados', {
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
    tituloER: {
      type: DataTypes.STRING(100),
      allowNull: false
    }  
  },{
    timestamps: false
  })

  module.exports = Estados

  
