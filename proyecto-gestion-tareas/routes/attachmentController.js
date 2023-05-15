const Attachment = require('../models/attachment');
const { NotFoundError } = require('../misc/errors');

// Controlador para obtener todas las adjuntos
const getAttachments = async (req, res) => {
  try {
    const attachments = await Attachment.find();
    res.json(attachments);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener los adjuntos' });
  }
};

// Controlador para agregar un nuevo adjunto
const addAttachment = async (req, res) => {
  try {
    const { filename, path, taskId } = req.body;
    const newAttachment = new Attachment({ filename, path, taskId });
    await newAttachment.save();
    res.status(201).json({ message: 'Adjunto agregado exitosamente', attachment: newAttachment });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al agregar un nuevo adjunto' });
  }
};

// Controlador para eliminar un adjunto
const deleteAttachment = async (req, res) => {
  try {
    const attachmentId = req.params.id;
    const attachment = await Attachment.findByIdAndRemove(attachmentId);
    if (!attachment) {
      throw new NotFoundError('Adjunto no encontrado');
    }
    res.json({ message: 'Adjunto eliminado' });
  } catch (error) {
    console.error(error);
    if (error instanceof NotFoundError) {
      res.status(404).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Error al eliminar el adjunto' });
    }
  }
};

module.exports = { 
  getAttachments,
  addAttachment,
  deleteAttachment 
};
