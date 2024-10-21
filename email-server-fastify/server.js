const fastify = require('fastify')({ logger: true });
const nodemailer = require('nodemailer');
const fastifyCors = require('@fastify/cors');
require('dotenv').config();


// Handle CORS
fastify.register(fastifyCors, {
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST']
});

const transporter = nodemailer.createTransport({
  host: 'mail.d-share.io',
  port: 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

// Route for sending emails
fastify.post('/send-email', async (request, reply) => {
  const { name, email, message } = request.body;

  try {
    const info = await transporter.sendMail({
      from: `"${name}" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,
      replyTo: email,
      subject: `New message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong></p>
             <p>${message.replace(/\n/g, '<br>')}</p>`
    });

    reply.send({ success: true, messageId: info.messageId });
  } catch (error) {
    console.error('Error sending email:', error);
    reply.status(500).send({ 
      error: error.message, 
      code: error.code
    });
  }
});

// Start the server
const start = async () => {
  try {
    await fastify.listen({ port: 3000, host: '0.0.0.0' });
    console.log(`Server running at http://localhost:3000`);
  } catch (err) {
    console.error('Error starting server:', err);
    process.exit(1);
  }
};

start();