const mongoose = require('mongoose');

// Definición del esquema para la colección "Attachment"
const attachmentSchema = new mongoose.Schema({
  filename: {
    type: String,
    required: true
  },
  path: {
    type: String,
    required: true
  },
  taskId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Task',
    required: true
  }
});

// Exportar el modelo "Attachment" basado en el esquema definido
module.exports = mongoose.model('Attachment', attachmentSchema);



