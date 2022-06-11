import { DataTypes } from 'sequelize';
import { sequelize } from '../../database/conection.js';

export const Generos = sequelize.define('cfg_generos', {
   id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
   },
   genero: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
   }
},{
   timestamps: false,
})