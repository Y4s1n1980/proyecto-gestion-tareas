const { pool } = require('../configs/db');

exports.getCommenstByTaskId = async (req, res) => {
  const taskId = req.params.id;
  try {
    const { rows } = await pool.query('SELECT * FROM comments WHERE task_id = $1', [taskId]);
    return res.json(rows);
  } catch (error) {
    console.error('Error al obtener los comentarios de la tarea:', error);
    return res.status(500).json({ error: 'Error al obtener los comentarios de la tarea' });
  }
};

exports.addComment = async (req, res) => {
  const { taskId, userId, content } = req.body;
  try {
    const { rows } = await pool.query('INSERT INTO comments (task_id, user_id, content) VALUES ($1, $2, $3) RETURNING *', [taskId, userId, content]);
    return res.json(rows[0]);
  } catch (error) {
    console.error('Error al añadir el comentario:', error);
    return res.status(500).json({ error: 'Error al añadir el comentario' });
  }
};

exports.deleteComment = async (req, res) => {
  const id = req.params.id;
  try {
    await pool.query('DELETE FROM comments WHERE id = $1', [id]);
    return res.json({ message: 'Comentario eliminado exitosamente' });
  } catch (error) {
    console.error('Error al eliminar el comentario:', error);
    return res.status(500).json({ error: 'Error al eliminar el comentario' });
  }
};

module.exports = {
  getCommenstByTaskId,
  addComment,
  deleteComment 
};
