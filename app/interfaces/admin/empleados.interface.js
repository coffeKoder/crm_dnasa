import { DataTypes } from 'sequelize';
import { sequelize } from '../../database/conection.js';
import {Academica} from './academica.interface.js';
import {Accesos} from './accesos.interface.js';
import {Contactos} from './contactos.interface.js';
import {Direcciones} from './direcciones.interface.js';
import {Emergencia} from './emergencia.interface.js';
import {Laboral} from './laboral.interface';
import {Medica} from './medica.interface.js';
import {Personal} from './personal.interface.js';

export const Empleados = sequelize.define('adm_empleados', {
   id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
   },
   acceso_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
         model: Accesos,
         key: 'id'
      }
   },
   academica_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
         model: Academica,
         key: 'id'
      }
   },
   contacto_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
         model: Contactos,
         key: 'id'
      }
   },
   direccion_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
         model: Direcciones,
         key: 'id'
      }
   },
   emergencia_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
         model: Emergencia,
         key: 'id'
      }
   },
   laboral_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
         model: Laboral,
         key: 'id'
      }
   },
   medica_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
         model: Medica,
         key: 'id'
      }
   },
   personal_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
         model: Personal,
         key: 'id'
      }
   },
});