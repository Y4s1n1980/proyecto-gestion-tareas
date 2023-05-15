const { pool } = require('../configs/db');

exports.getCategories = async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM categories');
    return res.json(rows);
  } catch (error) {
    console.error('Error al obtener las categorías:', error);
    return res.status(500).json({ error: 'Error al obtener las categorías' });
  }
};

exports.addCategory = async (req, res) => {
  const { name, description } = req.body;
  try {
    const { rows } = await pool.query('INSERT INTO categories (name, description) VALUES ($1, $2) RETURNING *', [name, description]);
    return res.json(rows[0]);
  } catch (error) {
    console.error('Error al agregar la categoría:', error);
    return res.status(500).json({ error: 'Error al agregar la categoría' });
  }
};

exports.updateCategory = async (req, res) => {
  const categoryId = req.params.id;
  const { name, description } = req.body;
  try {
    const { rows } = await pool.query('UPDATE categories SET name = $1, description = $2 WHERE id = $3 RETURNING *', [name, description, categoryId]);
    if (rows.length === 0) {
      return res.status(404).json({ error: 'Categoría no encontrada' });
    }
    return res.json(rows[0]);
  } catch (error) {
    console.error('Error al actualizar la categoría:', error);
    return res.status(500).json({ error: 'Error al actualizar la categoría' });
  }
};

exports.deleteCategory = async (req, res) => {
  const categoryId = req.params.id;
  try {
    const { rows } = await pool.query('DELETE FROM categories WHERE id = $1 RETURNING *', [categoryId]);
    if (rows.length === 0) {
      return res.status(404).json({ error: 'Categoría no encontrada' });
    }
    return res.json({ message: 'Categoría eliminada exitosamente' });
  } catch (error) {
    console.error('Error al eliminar la categoría:', error);
    return res.status(500).json({ error: 'Error al eliminar la categoría' });
  }
};

module.exporte = {
  getCategories,
  addCategory,
  updateCategory,
  deleteCategory
};