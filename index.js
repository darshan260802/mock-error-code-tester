const express = require('express');
const app = express();
const cors = require('cors');
const logger = require('morgan');
const errorResponses = require('./utils/errorResponses');
const authRoutes = require('./routes/authRoutes');

// Middleware
app.use(cors());
app.use(express.json());
app.use(logger('dev'));

// Routes
app.use('/auth', authRoutes);

// Random error response
app.get('/error/random', (req, res) => {
  const errorResponse = errorResponses.getRandomErrorResponse();
  res.status(errorResponse.statusCode).json(errorResponse.body);
});

// Specific error response
app.get('/error/custom', (req, res) => {
  const { statusCode, body } = req.query;
  if (statusCode && body) {
    res.status(parseInt(statusCode)).json(JSON.parse(body));
  } else {
    res.status(400).json({ error: 'Invalid request parameters' });
  }
});

// Delayed response
app.get('/error/delay', (req, res) => {
  const { delay = 0 } = req.query;
  setTimeout(() => {
    res.status(200).json({ message: 'Delayed response' });
  }, parseInt(delay));
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  const errorResponse = errorResponses.getErrorResponse(err);
  res.status(errorResponse.statusCode).json(errorResponse.body);
});

// 404 handler for undefined routes
app.use((req, res, next) => {
  res.status(404).json({ error: 'Not found' });
});

const PORT = process.env.PORT || 7000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});