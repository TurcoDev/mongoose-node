const mongoose = require('mongoose');

const MascotaSchema = new mongoose.Schema({
  nombre:  String,
  descripcion: String
});

// Crear el modelo
const Mascota = mongoose.model('mascotas', MascotaSchema);

module.exports = Mascota;