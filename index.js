const express = require('express');
const userRoutes = require('./routes/userRoutes');

const app = express();
app.use(express.json());
app.use('/users', userRoutes);

app.listen(3001, () => console.log('Servidor escuchando en http://localhost:3001'));

// Este ejemplo ilustra cómo el patrón MVC ayuda a mantener el código modular y separado, facilitando su mantenimiento.
// npm init -y
// npm install express
// Utiliza un probador de APIs para probar la creación del usuario en la URL http://localhost:3001/users (método POST)
// con un cuerpo que contenga los datos del usuario.
/* {
    "id": 1,
        "name": "Juan",
            "email": "juan@example.com"
} */
