const nodemailer = require('nodemailer');

async function sendEmail(senderEmail) {
  try {
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'cafeconsal1980@gmail.com',
        pass: 'Losordenadoresgrandes7+4',
      },
    });

    let info = await transporter.sendMail({
      from: `"probando mail de proyecto" <${senderEmail}>`, // Utilizar la dirección de correo electrónico del remitente proporcionada
      to: 'yasin-1980@hotmail.com, benomaryasin1980@gmail.com', // Lista de destinatarios separados por coma
      subject: 'Hola ✔', // Asunto del correo electrónico
      text: 'Hola', // Cuerpo del correo electrónico en texto plano
      html: '<b>Hola</b>', // Cuerpo del correo electrónico en formato HTML
    });

    console.log('Mensaje enviado: %s', info.messageId);
    console.log('URL de vista previa: %s', nodemailer.getTestMessageUrl(info));
  } catch (error) {
    console.error('Error al enviar el correo electrónico:', error);
  }
}

module.exports = sendEmail;
