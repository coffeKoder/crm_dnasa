import { DataTypes } from 'sequelize';
import { sequelize } from '../../database/conection.js';

export const Areas = sequelize.define('cfg_areas', {
   id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
   },
   area: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
   },
   alias: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
   }
},{
   timestamps: false,
});