export function errorHandler(err, req, res, next) {
   console.log(err);
   res.status(500).send({
      ok: false,
      message: 'Error en el servidor',
      error: err
   });
}