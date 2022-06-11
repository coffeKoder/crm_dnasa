import { DataTypes } from 'sequelize';
import { sequelize } from '../../database/conection.js';

export const Roles = sequelize.define('cfg_roles', {
      id: {
         type: DataTypes.INTEGER,
         primaryKey: true,
         autoIncrement: true         
      },
      rol: {
         type: DataTypes.STRING,
         allowNull: false,
         unique: true
      }
},{
   timestamps: false,
})