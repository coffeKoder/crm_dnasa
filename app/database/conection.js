
import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
   'crm_dnasa', 
   'desarrollo', 
   '1q2w3e4r5t', 
   {
      host: 'localhost',
      dialect: 'mysql',
      pool: {
         max: 5,
         min: 0,
         acquire: 30000,
         idle: 10000
      }
   })