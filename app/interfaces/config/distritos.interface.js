import { DataTypes } from 'sequelize';
import { sequelize } from '../../database/conection.js';
import { Provincias } from './provincias.interface.js';

export const Distritos = sequelize.define('cfg_distritos', {
   id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
   },
   distrito: {
      type: DataTypes.STRING,
      allowNull: false
   },
   provincia_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
         model: Provincias,
         key: 'id',
      } 
   }
},{
   timestamps: false,
});