const express = require('express');
const router = express.Router();

const authController = require('./authController');
const userController = require('./userController');
const taskController = require('./taskController');
const commentController = require('./commentController');
const attachmentController = require('./attachmentController');
const categoryController = require('./categoryController');
const { pool } = require('../configs/db');


// Rutas de autenticación
router.post('/register', authController.register);
router.post('/login', authController.login);
router.get('/logout', authController.logout);

// Rutas de gestión de usuarios
router.get('/users', userController.getUsers);
router.get('/users/:id', userController.getUserById);
router.put('/users/:id', userController.updateUser);
router.delete('/users/:id', userController.deleteUser);

// Rutas de gestión de tareas
router.get('/tasks', taskController.getTasks);
router.post('/tasks', taskController.addTask);
router.put('/tasks/:id/complete', taskController.completeTask);
router.delete('/tasks/:id', taskController.deleteTask);

// Rutas de gestión de comentarios
router.get('/tasks', taskController.getTasks);
router.get('/tasks/:id/comments', commentController.getCommentsByTaskId); 
router.post('/tasks', taskController.createTask);
router.put('/tasks/:id', taskController.updateTask);
router.delete('/tasks/:id', taskController.deleteTask);
router.post('/comments', commentController.addComment);
router.delete('/comments/:id', commentController.deleteComment);

// Rutas de gestión de adjuntos
router.get('/attachments', attachmentController.getAttachments);
router.post('/attachments', attachmentController.addAttachment);
router.put('/attachments/:id', attachmentController.updateAttachment);
router.delete('/attachments/:id', attachmentController.deleteAttachment);

// Rutas de gestión de categorías
router.get('/categories', categoryController.getCategories);
router.post('/categories', categoryController.addCategory);
router.put('/categories/:id', categoryController.updateCategory);
router.delete('/categories/:id', categoryController.deleteCategory);

module.exports = router;



