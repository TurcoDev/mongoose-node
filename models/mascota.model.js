const mongoose = require('mongoose');

const MascotaSchema = new mongoose.Schema({
  nombre:  String,
  descripcion: String,
  consultas: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Consulta' }],
  clienteId: { type: mongoose.Schema.Types.ObjectId, ref: 'Cliente' }
});

// Crear el modelo
const Mascota = mongoose.model('mascotas', MascotaSchema);

module.exports = Mascota;