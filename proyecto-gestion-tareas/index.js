const express = require('express');
const app = express();
const nodemailer = require('nodemailer');
const { body, validationResult } = require('express-validator');
const router = require('./routes/routes');
const { pool } = require('./database');


// Middleware para procesar los datos en formato JSON
app.use(express.json());

// Middleware de manejo de errores
app.use(pool.middleware);

// Rutas de la aplicación
app.use('/api', router);

// Ruta para enviar correo electrónico con validación de datos
app.post('/email', [
    body('senderEmail').isEmail(),
    body('to').isEmail(),
    body('subject').notEmpty(),
    body('text').notEmpty(),
    body('html').notEmpty(),
  ], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ error: errors.array() });
    }
  
    const { to, subject, text, html } = req.body;
  
    try {
      // Llamar a la función para enviar el correo electrónico
      await sendEmail(to, subject, text, html);
  
      return res.json({ message: 'Correo electrónico enviado exitosamente' });
    } catch (error) {
      console.error('Error al enviar el correo electrónico:', error);
      return res.status(500).json({ error: 'Error al enviar el correo electrónico' });
    }
  });
  
// Ruta para enviar correo electrónico sin validación de datos
app.post('/send-email', async (req, res) => {
  const { to, subject, text, html } = req.body;

  try {
    // Llamar a la función para enviar el correo electrónico
    await sendEmail(to, subject, text, html);

    return res.json({ message: 'Correo electrónico enviado exitosamente' });
  } catch (error) {
    console.error('Error al enviar el correo electrónico:', error);
    return res.status(500).json({ error: 'Error al enviar el correo electrónico' });
  }
});

// Middleware de captura de errores
app.use(pool.errorHandler);

// Función para enviar el correo electrónico
async function sendEmail(to, subject, text, html) {
  try {
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'cafeconsal1980@gmail.com',
        pass: 'Losordenadoresgrandes7+4',
      },
    });

    let info = await transporter.sendMail({
      from: '"Fred Foo 👻" <foo@example.com>',
      to,
      subject,
      text,
      html,
    });

    console.log('Mensaje enviado: %s', info.messageId);
    console.log('URL de vista previa: %s', nodemailer.getTestMessageUrl(info));
  } catch (error) {
    throw error;
  }
}

// Puerto de escucha
const port = 4000;
app.listen(port, () => {
  console.log(`Servidor en ejecución en el puerto ${port}`);
});
