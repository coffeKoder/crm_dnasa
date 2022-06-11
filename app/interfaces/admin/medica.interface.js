import { DataTypes } from 'sequelize';
import { sequelize } from '../../database/conection.js';
import { TipoSangre } from '../config/tiposangre.interface.js';

export const Medica = sequelize.define('adm_medica', {
   id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
   },
   tipo_sangre: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
         model: TipoSangre,
         key: 'id'
      }
   },
   alergias: { type: DataTypes.STRING, allowNull: true },
   enfermedades: { type: DataTypes.STRING, allowNull: true },
   medicamentos: { type: DataTypes.STRING, allowNull: true },
   observaciones: { type: DataTypes.STRING, allowNull: true },
   medico_cabecera: { type: DataTypes.STRING, allowNull: true },

})