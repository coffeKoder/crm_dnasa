import { DataTypes } from 'sequelize';
import { sequelize } from '../../database/conection.js';

export const Emergencia = sequelize.define('adm_emergencia', {
   id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
   },
   contacto_emergencia: {
      type: DataTypes.STRING,
      allowNull: true
   },
   telefono_emergencia: {
      type: DataTypes.STRING,
      allowNull: true
   },
   parentezco_emergencia: {
      type: DataTypes.STRING,
      allowNull: true
   }
});