import { DataTypes } from 'sequelize';
import { sequelize } from '../../database/conection.js';

export const Consultas = sequelize.define('crm_consultas', {
   id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
   },
   consulta: {
      type: DataTypes.STRING,
      allowNull: false
   }
})