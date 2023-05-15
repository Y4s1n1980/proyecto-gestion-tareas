const { createPool } = require('slonik');
const { BadRequestError, InternalServerError } = require('../misc/errors');

const pool = createPool(process.env.DB_URL);

// Middleware de manejo de errores
pool.middleware = (req, res, next) => {
  req.db = pool;
  next();
};

// Middleware de captura de errores
pool.errorHandler = (err, req, res, next) => {
  console.error(err.stack);

  let statusCode = 500;
  let errorMessage = 'Error interno del servidor';

  if (err instanceof BadRequestError) {
    statusCode = 400;
    errorMessage = err.message;
  } else if (err instanceof InternalServerError) {
    statusCode = 500;
    errorMessage = err.message;
  }

  res.status(statusCode).json({ error: errorMessage });
};

module.exports = {
  pool
};


