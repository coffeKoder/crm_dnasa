import { DataTypes } from 'sequelize';
import { sequelize } from '../../database/conection.js';

export const NotReady = sequelize.define('ref_notready', {
   id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
   },
   notready: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
   },
   description: {
      type: DataTypes.STRING,
      allowNull: false
   },
   nticon: {
      type: DataTypes.STRING,
      allowNull: false
   },
   ntuid: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
   }
},{
   timestamps: false,
})