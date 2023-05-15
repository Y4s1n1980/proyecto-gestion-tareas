const express = require('express');
const router = express.Router();
const User = require('../models/user');
const { NotFoundError } = require('../misc/errors');

// Controlador para obtener la lista de usuarios
const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener la lista de usuarios' });
  }
};

// Controlador para obtener un usuario por su ID
const getUserById = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findById(userId);
    if (!user) {
      throw new NotFoundError('Usuario no encontrado');
    }
    res.json(user);
  } catch (error) {
    console.error(error);
    if (error instanceof NotFoundError) {
      res.status(404).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Error al obtener el usuario por ID' });
    }
  }
};

// Controlador para actualizar un usuario
const updateUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const { name, email } = req.body;
    const user = await User.findByIdAndUpdate(userId, { name, email }, { new: true });
    if (!user) {
      throw new NotFoundError('Usuario no encontrado');
    }
    res.json(user);
  } catch (error) {
    console.error(error);
    if (error instanceof NotFoundError) {
      res.status(404).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Error al actualizar el usuario' });
    }
  }
};

// Controlador para eliminar un usuario
const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findByIdAndRemove(userId);
    if (!user) {
      throw new NotFoundError('Usuario no encontrado');
    }
    res.json({ message: `Usuario eliminado: ${userId}` });
  } catch (error) {
    console.error(error);
    if (error instanceof NotFoundError) {
      res.status(404).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Error al eliminar el usuario' });
    }
  }
};

// Asignar los controladores a las rutas correspondientes
router.get('/users', getUsers);
router.get('/users/:id', getUserById);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

module.exports = {
  getUsers,
  getUserById,
  updateUser,
  deleteUser

};

