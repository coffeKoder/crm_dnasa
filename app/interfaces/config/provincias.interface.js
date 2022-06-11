import { DataTypes } from 'sequelize';
import { sequelize } from '../../database/conection.js';

export const Provincias = sequelize.define('cfg_provincias', {
   id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
   },
   provincia: {
      type: DataTypes.STRING,
      allowNull: false
   }
},{
   timestamps: false,
});
