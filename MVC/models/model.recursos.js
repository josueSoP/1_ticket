const {DataTypes, Model} = require('sequelize')
const sequelize = require('../../db/db')

//Definir mi Modelo con que voy a trabajar
const Recursos = sequelize.define('recursos', {
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
    nombreRe: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    costosRe: {
      type: DataTypes.DECIMAL(30,2),
      allowNull: false
    }  
  },{
    timestamps: false
  })

  module.exports = Recursos

  
