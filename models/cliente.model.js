const mongoose = require('mongoose');

const ClienteSchema = new mongoose.Schema({
  nombre: String,
  telefono: String,
  mascotas: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Mascota' }]
});

// Crear el modelo
const Cliente = mongoose.model('clientes', ClienteSchema);

module.exports = Cliente;