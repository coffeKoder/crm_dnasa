// System imports
import Express  from "express";

// Local imports
import  {errorHandler}  from "../app/middlewares/errores.middleware.js";

export class Server {
  
   // Constructor
   constructor() {
      this.app = new Express();
      this.port = process.env.PORT || 3000;
      this.routes();
   }

   // Methods: Manejo de rutas
   routes(){
      this.app.use('/', (req, res) => {
      });
   }

   // Methods: Manejo de middlewares
   middlewares(){
      this.app.use(Express.json());
      this.app.use(errorHandler);
   }

   // Methods: Lanza la aplicacion
   main() {
      this.app.listen(this.port, () => {
         console.log(`Server running on port ${this.port}`);
      });
   }
}