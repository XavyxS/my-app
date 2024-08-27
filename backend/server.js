const express = require('express');
const cors = require('cors'); // Importar cors
const app = express();

// Configuración de CORS para permitir solicitudes desde tu frontend
app.use(cors({
  origin: 'https://my-app-qk09.onrender.com', // Permitir solicitudes solo desde tu frontend en producción
}));

app.use(express.json());

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

app.listen(process.env.PORT || 5000, () => {
  console.log('Servidor escuchando en el puerto 5000');
});
