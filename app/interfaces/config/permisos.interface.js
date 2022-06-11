import { DataTypes } from 'sequelize';
import { sequelize } from '../../database/conection.js';
import { Roles } from '../../database/models/cfg_roles.js';
import { Perfiles } from '../../database/models/cfg_perfiles.js';

export const Permisos = sequelize.define('cfg_permisos', {
   id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
   },
   perfil_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
         model: Perfiles,
         key: 'id'
      }
   },
   rol_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
         model: Roles,
         key: 'id'
      }
   }
}, {
   timestamps: false,
})