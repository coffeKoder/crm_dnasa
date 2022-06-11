import { DataTypes } from 'sequelize';
import { sequelize } from '../../database/conection.js';
import { Distritos } from './distritos.interface.js';

export const Corregimientos = sequelize.define('cfg_corregimientos', {
   id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
   },
   corregimiento: {
      type: DataTypes.STRING,
      allowNull: false
   },
   distrito_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
         model: Distritos,
         key: 'id',
      }
   }
},{
   timestamps: false,
});