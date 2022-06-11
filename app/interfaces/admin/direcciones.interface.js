import { DataTypes } from 'sequelize';
import { sequelize } from '../../database/conection.js';
import { Corregimientos } from '../config/corregimientos.interface.js';

export const Direcciones = sequelize.define('adm_direcciones', {
   id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
   },
   corregimiento_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
         model: Corregimientos,
         key: 'id'
      }
   },
   direccion: {
      type: DataTypes.STRING,
      allowNull: true
   }
});