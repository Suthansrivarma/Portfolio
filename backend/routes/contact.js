/**
 * routes/contact.js
 * POST /api/contact — Save contact form submission to MongoDB
 */

const express = require('express');
const router  = express.Router();
const Contact = require('../models/Contact');
const { sendContactNotification } = require('../services/mailer');

/**
 * @route   POST /api/contact
 * @desc    Save a new contact message
 * @access  Public
 */
router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Basic presence validation (Mongoose handles detailed validation)
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'All fields (name, email, message) are required.',
      });
    }

    // Create and save the contact document
    const contact = new Contact({ name, email, message });
    await contact.save();

    const emailResult = await sendContactNotification({
      name,
      email,
      message,
      createdAt: contact.createdAt || new Date(),
    });

    console.log(`📬  New message from ${name} <${email}>`);

    return res.status(201).json({
      success: true,
      message: emailResult.delivered
        ? 'Message received! I will get back to you within 24 hours.'
        : 'Message saved. Email notification is not configured yet.',
      data: { name: contact.name, email: contact.email, createdAt: contact.createdAt },
    });

  } catch (err) {
    // Handle Mongoose validation errors
    if (err.name === 'ValidationError') {
      const errors = Object.values(err.errors).map(e => e.message);
      return res.status(400).json({ success: false, message: errors.join('. ') });
    }

    console.error('Contact route error:', err);
    return res.status(500).json({ success: false, message: 'Server error. Please try again.' });
  }
});

/**
 * @route   GET /api/contact
 * @desc    Retrieve all messages (protect this in production with auth!)
 * @access  Private (add auth middleware before deploying)
 */
router.get('/', async (req, res) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 });
    return res.status(200).json({ success: true, count: messages.length, data: messages });
  } catch (err) {
    return res.status(500).json({ success: false, message: 'Server error.' });
  }
});

module.exports = router;
