import { Router } from 'express';
import { ApiResponse } from '../utils/apiResponse.js';

const router = Router();

// Health check endpoint
router.get('/health', (req, res) => {
  return ApiResponse.success(res, {
    status: 'healthy',
    environment: process.env.NODE_ENV || 'development',
    time: new Date().toISOString()
  }, 'FiftyFifty Gym API is operating normally');
});

// Placeholders for module routers (to be attached as modules are built)
// router.use('/auth', authRoutes);
// router.use('/admin', adminRoutes);
// router.use('/owner', ownerRoutes);
// router.use('/members', memberRoutes);
// router.use('/plans', planRoutes);
// router.use('/attendance', attendanceRoutes);
// router.use('/payments', paymentRoutes);
// router.use('/notifications', notificationRoutes);
// router.use('/portal', memberPortalRoutes);

export default router;
