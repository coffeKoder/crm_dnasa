import { DataTypes } from 'sequelize';
import { sequelize } from '../../database/conection.js';

export const Perfiles = sequelize.define('cfg_perfiles', {
   id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
   },
   perfil:{
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
   }
},{
   timestamps: false,
});