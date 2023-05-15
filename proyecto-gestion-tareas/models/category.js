const mongoose = require('mongoose');

// Definición del esquema para la colección "Category"
const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  // Otros campos necesarios para la categoría
  // Por ejemplo:
  color: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  },
  isActive: {
    type: Boolean,
    default: true
  }
});

// Exportar el modelo "Category" basado en el esquema definido
module.exports = mongoose.model('Category', categorySchema);




