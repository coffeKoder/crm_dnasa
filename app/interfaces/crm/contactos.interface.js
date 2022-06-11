import { DataTypes } from 'sequelize';
import { sequelize } from '../../database/conection.js';

export const Contactos = sequelize.define('crm_contactos', {
   id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
   },
   contacto: {
      type: DataTypes.STRING,
      allowNull: false
   }
})