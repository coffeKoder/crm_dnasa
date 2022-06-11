import { DataTypes } from 'sequelize';
import { sequelize } from '../../database/conection.js';

export const EstadosUsuario = sequelize.define('cfg_estados_usuario', {
   id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
   },
   estado_usuario: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
   }
},{
   timestamps: false,
});