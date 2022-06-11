import { DataTypes } from 'sequelize';
import { sequelize } from '../../database/conection.js';
import { Empleados } from '../admin/empleados.interface.js';
import { Contactos } from './contactos.interface.js';
import { Consultas } from './consultas.interface.js';

export const Registros = sequelize.define('crm_registros', {
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
   inicio_dt: { type: DataTypes.DATE, allowNull: false },
   identificador: { type: DataTypes.STRING, allowNull: false },
   contacto_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
         model: Contactos,
         key: 'id'
      }
   },
   consulta_id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
         model: Consultas,
         key: 'id'
      }
   },
   notas: {type: DataTypes.STRING, allowNull: false},
   fin_dt: { type: DataTypes.DATE, allowNull: false }

})