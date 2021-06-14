const {DataTypes, Model} = require('sequelize')
const sequelize = require('../../db/db')

//Definir mi Modelo con que voy a trabajar
const CostosDir = sequelize.define('costos', {
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
    opcionCD: {
      type: DataTypes.INTEGER,
      allowNull: false
    } 
  },{
    timestamps: false
  })


  // CostosDirectos.hasMany(DirectosValues, {
  //   foreignKey: {
  //       name: 'directo_id',
  //       type: DataTypes.INTEGER,
  //       allowNull: false
  //   },
  //   onDelete: 'CASCADE'
  // });

  // const DirectosValues = sequelize.define('costosDir_valores', {
  //   id: {
  //       type: DataTypes.INTEGER,
  //       primaryKey: true,
  //       autoIncrement: true,
  //   },
  //   directo_id: {
  //       type: DataTypes.INTEGER,
  //       references: {
  //           model: 'costosDir',
  //           key: 'id'
  //       },
  //       allowNull: false        
  //   },
  //   valor: {
  //       type: DataTypes.DECIMAL(10,2),
  //       allowNull: true,        
  //   },    
  // }, {
  //   timestamps: false
  // });

  // module.exports = {CostosDir, DirectosValues}
   module.exports = CostosDir