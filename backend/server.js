/**
 * server.js — Portfolio Backend Entry Point
 * Express + MongoDB REST API for contact form
 */

const express  = require('express');
const mongoose = require('mongoose');
const cors     = require('cors');
const dotenv   = require('dotenv');

// Load environment variables from .env file
dotenv.config();

const contactRoutes = require('./routes/contact');

const app = express();

/* ── Middleware ── */
app.use(cors({
  origin: process.env.FRONTEND_URL || '*',  // e.g. 'https://your-portfolio.vercel.app'
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type'],
}));
app.use(express.json());             // Parse JSON request bodies
app.use(express.urlencoded({ extended: true }));

/* ── Routes ── */
app.use('/api/contact', contactRoutes);

// Health-check endpoint (useful for Render deployment)
app.get('/health', (req, res) => {
  res.json({ status: 'ok', uptime: process.uptime() });
});

// 404 handler for unknown routes
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error('Server error:', err.stack);
  res.status(500).json({ message: 'Internal server error' });
});

/* ── Database connection + Server start ── */
const PORT        = process.env.PORT        || 5000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio';

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log('✅  Connected to MongoDB');
    app.listen(PORT, () => console.log(`🚀  Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error('❌  MongoDB connection failed:', err.message);
    process.exit(1);
  });
