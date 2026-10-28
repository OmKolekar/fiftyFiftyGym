import express from 'express';
import cors from 'cors';
import routes from './routes/index.js';
import { errorHandler } from './middlewares/error.middleware.js';
import { NotFoundError } from './exceptions/index.js';

const app = express();

// Standard middleware pipeline
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Root route
app.get('/', (req, res) => {
  res.json({
    name: 'FiftyFifty Gym API',
    version: '1.0.0',
    documentation: '/api/health'
  });
});

// Mount master API routes
app.use('/api', routes);

// 404 handler for unmatched routes
app.use((req, res, next) => {
  next(new NotFoundError(`Route not found: ${req.method} ${req.originalUrl}`));
});

// Centralized error handling middleware
app.use(errorHandler);

export default app;
