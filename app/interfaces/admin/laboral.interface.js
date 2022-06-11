import { DataTypes } from 'sequelize';
import { sequelize } from '../../database/conection.js';
import { Areas } from '../config/areas.interface.js';
import { Jefes } from '../config/jefes.interface.js';
import { Cargos } from '../config/cargos.interface.js';

export const Laboral = sequelize.define('adm_laboral', {
   id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
   },
   correo_institucional: {
      type: DataTypes.STRING,
      allowNull: false
   },
   codigo_empleado: {
      type: DataTypes.STRING,
      allowNull: false
   },
   area_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
         model: Areas,
         key: 'id'
      }
   },
   cargo_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
         model: Cargos,
         key: 'id'
      }
   },
   jefe_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
         model: Jefes,
         key: 'id'
      }
   },
   fecha_ingreso: {
      type: DataTypes.DATE,
      allowNull: false
   },
   fecha_retiro: {
      type: DataTypes.DATE,
      allowNull: true
   },
   estado: {
      type: DataTypes.BOOLEAN,
      allowNull: false
   }
});