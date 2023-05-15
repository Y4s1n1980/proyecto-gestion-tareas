const express = require('express');
const router = express.Router();
const { validationResult } = require('express-validator');
const { body } = require('express-validator');
const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { UnauthorizedError } = require('../misc/errors');

// Clave secreta para firmar el token
const secretKey = '6Pund@3¬&jns5@';

// Controlador para registrar un usuario
const register = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ error: errors.array() });
    }

    const { name, email, password } = req.body;
    // Verificar si el usuario ya existe en la base de datos
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'El usuario ya está registrado' });
    }
    // Crear un nuevo usuario
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();
    res.json({ message: 'Registro exitoso' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error en el registro de usuario' });
  }
};

// Controlador para iniciar sesión
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    // Verificar si el usuario existe en la base de datos
    const user = await User.findOne({ email });
    if (!user) {
      throw new UnauthorizedError('Credenciales inválidas');
    }
    // Verificar la contraseña
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedError('Credenciales inválidas');
    }
    // Generar el token de autenticación
    const token = generateAuthToken(user);
    res.json({ message: 'Inicio de sesión exitoso', token });
  } catch (error) {
    console.error(error);
    if (error instanceof UnauthorizedError) {
      res.status(401).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Error en el inicio de sesión' });
    }
  }
};

// Función para generar el token de autenticación
const generateAuthToken = (user) => {
  const payload = {
    userId: user._id,
    name: user.name,
    email: user.email,
  };
  const options = {
    expiresIn: '1h',
  };
  return jwt.sign(payload, secretKey, options);
};

// Controlador para cerrar sesión
const logout = (req, res) => {
  // Aquí puedes implementar la lógica para cerrar sesión,
  // por ejemplo, invalidar el token de autenticación
  // Si estás utilizando tokens JWT, no hay necesidad de invalidar el token.
  // Simplemente borra el token almacenado en el cliente (por ejemplo, en las cookies o en el almacenamiento local del navegador).
  res.json({ message: 'Cierre de sesión exitoso' });
};

// Asignar los controladores a las rutas correspondientes
router.post('/register', register);
router.post('/login', login);
router.get('/logout', logout);

module.exports = {
  register,
  login,
  logout
};

