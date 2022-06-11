import { DataTypes } from 'sequelize';
import { sequelize } from '../../database/conection.js';
import { Generos } from '../config/generos.interface.js';

export const Personal = sequelize.define('adm_personal', {
   id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
   },
   nombres: {
      type: DataTypes.STRING,
      allowNull: false
   },
   apellidop: {
      type: DataTypes.STRING,
      allowNull: false
   },
   apellidom: {
      type: DataTypes.STRING,
      allowNull: false
   },
   cedula: {
      type: DataTypes.STRING,
      allowNull: false
   },
   fecha_nacimiento: {
      type: DataTypes.DATE,
      allowNull: false
   },
   genero_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
         model: Generos,
         key: 'id'
      }
   }
});