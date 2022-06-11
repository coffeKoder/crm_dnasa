import { DataTypes } from 'sequelize';
import { sequelize } from '../../database/conection.js';
import { Empleados } from '../admin/empleados.interface.js';
import { NotReady } from './notready.interface.js';

export const Actividades = sequelize.define('nrd_actividades', {
   id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
   },
   empleado_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
         model: Empleados,
         key: 'id'
      }
   },
   notready_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
         model: NotReady,
         key: 'id'
      }
   },
   inicio_dt: {
      type: DataTypes.DATE,
      allowNull: false
   },
   fin_dt: {
      type: DataTypes.DATE,
      allowNull: false
   }
})