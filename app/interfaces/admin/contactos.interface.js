import { DataTypes } from 'sequelize';
import { sequelize } from '../../database/conection.js';

export const Contactos = sequelize.define('adm_contactos', {
   id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
   },
   telefonop: {
      type: DataTypes.STRING,
      allowNull: true
   },
   celularp: {
      type: DataTypes.STRING,
      allowNull: true
   },
   correop: {
      type: DataTypes.STRING,
      allowNull: true
   }
});