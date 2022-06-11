import Sequelize from 'sequelize';
import {sequelize} from '../../database/connection';
import { Sequelize } from 'sequelize';
import '../../interfaces/activity/actividades.interface';
import '../../interfaces/activity/notready.interface';
import '../../interfaces/admin/academica.interface';
import '../../interfaces/admin/accesos.interface';
import '../../interfaces/admin/contactos.interface';
import '../../interfaces/admin/direcciones.interface';
import '../../interfaces/admin/emergencia.interface';
import '../../interfaces/admin/empleados.interface';
import '../../interfaces/admin/laboral.interface';
import '../../interfaces/admin/medica.interface';
import '../../interfaces/admin/personal.interface';
import '../../interfaces/config/areas.interface';
import '../../interfaces/config/cargos.interface';
import '../../interfaces/config/corregimientos.interface';
import '../../interfaces/config/distritos.interface';
import '../../interfaces/config/estadousuario.interface';
import '../../interfaces/config/generos.interface';
import '../../interfaces/config/jefes.interface';
import '../../interfaces/config/perfiles.interface';
import '../../interfaces/config/permisos.interface';
import '../../interfaces/config/provincias.interface';
import '../../interfaces/config/roles.interface';
import '../../interfaces/config/tiposangre.interface';
import '../../interfaces/crm/consultas.interface';
import '../../interfaces/crm/contactos.interface';
import '../../interfaces/crm/registros.interface';


module.exports = {
   instalar: (req, res) => {
      const db = sequelize.sync({alert: true});
      res.json(db);
   }
}
