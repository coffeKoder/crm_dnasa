import { DataTypes } from 'sequelize';
import { sequelize } from '../../database/conection.js';
import { Perfiles } from '../config/perfiles.interface.js';

export const Accesos = sequelize.define('adm_accesos', {
   id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
   },
   usuario: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true
   },
   perfil_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
         model: Perfiles,
         key: 'id'
      }
   },
   clave: {
      type: DataTypes.STRING,
      allowNull: false
   },
   avatar: {
      type: DataTypes.STRING,
      allowNull: true
   }

});