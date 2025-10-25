const express = require('express');
const app = express();
const PORT = 3130;

// Middlewares
app.use(express.json());

// Importar rutas
const cuentasRoutes = require('./rutas/account');

// Usar rutas
app.use('/', cuentasRoutes);

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
  console.log(`Servidor corriendo en http://localhost:${PORT}/account`);
  console.log(`Servidor corriendo en http://localhost:${PORT}/account/1`);
  console.log(`Servidor corriendo en http://localhost:${PORT}/query?client=David%20Martinez`);
  console.log(`Servidor corriendo en http://localhost:${PORT}/accountBalance`);
});