const mongoose = require('mongoose');

const ConsultaSchema = new mongoose.Schema({
  fecha: Date,
  motivo: String,
  mascotaId: { type: mongoose.Schema.Types.ObjectId, ref: 'Mascota' }
});

// Crear el modelo
const Consulta = mongoose.model('consultas', ConsultaSchema);

module.exports = Consulta;