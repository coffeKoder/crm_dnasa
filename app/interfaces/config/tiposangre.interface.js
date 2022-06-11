import { DataTypes } from 'sequelize';
import { sequelize } from '../../database/conection.js';

export const TipoSangre = sequelize.define('cfg_tipo_sangre', {
   id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
   },
   tipo_sangre: {
      type: DataTypes.STRING,
      allowNull: false
   }
},{
   timestamps: false,
})