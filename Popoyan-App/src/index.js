const express = require('express');
const morgan = require('morgan');
const cors = require('cors')

const pokemonesRoutes = require('./routes/pokemones.routes')

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(pokemonesRoutes);
app.use((err, req, res, next) => {
    return res.json({
        message: err.message
    })
});

app.listen(3000)
console.log('Servidor abierto en el puerto 3000')