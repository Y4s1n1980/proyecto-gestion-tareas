const express = require('express');
const router = express.Router();
const Task = require('../models/task');
const { NotFoundError } = require('../misc/errors');

// Controlador para obtener todas las tareas
const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener las tareas' });
  }
};

// Controlador para agregar una nueva tarea
const addTask = async (req, res) => {
  try {
    const { title, description } = req.body;
    const newTask = new Task({ title, description });
    await newTask.save();
    res.status(201).json({ message: 'Tarea agregada exitosamente', task: newTask });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al agregar una nueva tarea' });
  }
};

// Controlador para marcar una tarea como completada
const completeTask = async (req, res) => {
  try {
    const taskId = req.params.id;
    const task = await Task.findByIdAndUpdate(taskId, { completed: true }, { new: true });
    if (!task) {
      throw new NotFoundError('La tarea no existe');
    }
    res.json({ message: 'Tarea marcada como completada', task });
  } catch (error) {
    console.error(error);
    if (error instanceof NotFoundError) {
      res.status(404).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Error al marcar la tarea como completada' });
    }
  }
};

// Controlador para eliminar una tarea
const deleteTask = async (req, res) => {
  try {
    const taskId = req.params.id;
    const task = await Task.findByIdAndRemove(taskId);
    if (!task) {
      throw new NotFoundError('La tarea no existe');
    }
    res.json({ message: 'Tarea eliminada' });
  } catch (error) {
    console.error(error);
    if (error instanceof NotFoundError) {
      res.status(404).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Error al eliminar la tarea' });
    }
  }
};

// Asignar los controladores a las rutas correspondientes
router.get('/tasks', getTasks);
router.post('/tasks', addTask);
router.put('/tasks/:id/complete', completeTask);
router.delete('/tasks/:id', deleteTask);

module.exports = {
  getTasks,
  addTask,
  completeTask,
  deleteTask
};





