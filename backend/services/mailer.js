const nodemailer = require('nodemailer');

function buildTransporter() {
  const {
    SMTP_HOST,
    SMTP_PORT,
    SMTP_SECURE,
    SMTP_USER,
    SMTP_PASS,
  } = process.env;

  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
    return null;
  }

  return nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: SMTP_SECURE === 'true',
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  });
}

async function sendContactNotification({ name, email, message, createdAt }) {
  const transporter = buildTransporter();
  const to = process.env.CONTACT_RECEIVER_EMAIL || process.env.SMTP_USER;
  const from = process.env.CONTACT_SENDER_EMAIL || process.env.SMTP_USER;

  if (!transporter || !to || !from) {
    return { delivered: false, reason: 'Missing email configuration' };
  }

  const subject = `New Portfolio Contact Message from ${name}`;
  const text = [
    'You received a new portfolio contact message.',
    '',
    `Name: ${name}`,
    `Email: ${email}`,
    `Submitted At: ${createdAt.toISOString()}`,
    '',
    'Message:',
    message,
  ].join('\n');

  const html = `
    <h2>New Portfolio Contact Message</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Submitted At:</strong> ${createdAt.toISOString()}</p>
    <p><strong>Message:</strong></p>
    <p>${message.replace(/\n/g, '<br/>')}</p>
  `;

  await transporter.sendMail({
    from,
    to,
    subject,
    text,
    html,
    replyTo: email,
  });

  return { delivered: true };
}

module.exports = { sendContactNotification };
