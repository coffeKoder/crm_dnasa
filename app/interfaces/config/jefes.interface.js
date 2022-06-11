import { DataTypes } from 'sequelize';
import { sequelize } from '../../database/conection.js';

export const Jefes = sequelize.define('cfg_jefes', {
   id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
   },
   nombre_jefe: {
      type: DataTypes.STRING,
      allowNull: false
   },
   usuario_jefe: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
   }
},{
   timestamps: false,
});