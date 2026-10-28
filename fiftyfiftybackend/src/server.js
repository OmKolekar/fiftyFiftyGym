import dotenv from 'dotenv';
dotenv.config();

import app from './app.js';

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`[FiftyFifty Gym] Server listening on port ${PORT}`);
  console.log(`[FiftyFifty Gym] Health check available at http://localhost:${PORT}/api/health`);
});
