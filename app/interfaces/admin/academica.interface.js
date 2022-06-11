import { DataTypes } from 'sequelize';
import { sequelize } from '../../database/conection.js';

export const Academica = sequelize.define('adm_academica', {
   id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
   },
   grado: {
      type: DataTypes.STRING,
      allowNull: true
   },
   institucion: {
      type: DataTypes.STRING,
      allowNull: true
   },
   inicio_dt: {
      type: DataTypes.DATE,
      allowNull: true
   },
   fin_dt: {
      type: DataTypes.DATE,
      allowNull: true
   }, 
   estado: {
      type: DataTypes.STRING,
      allowNull: true
   }
})