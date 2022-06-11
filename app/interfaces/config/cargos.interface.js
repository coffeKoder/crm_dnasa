import { DataTypes } from 'sequelize';
import { sequelize } from '../../database/conection.js';


export const Cargos = sequelize.define('cfg_cargos', {
   id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
   },
   cargo: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
   }
},{
   timestamps: false,
})