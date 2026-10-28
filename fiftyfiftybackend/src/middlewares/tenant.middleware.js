import { ForbiddenError, BadRequestError } from '../exceptions/index.js';
import { ROLES } from '../constants/roles.constant.js';

export const requireGymTenant = (req, res, next) => {
  // Platform admins can optionally act on a gym via query/param/header if permitted
  if (req.user?.role === ROLES.PLATFORM_ADMIN) {
    req.gymId = req.headers['x-gym-id'] || req.query.gymId || req.body?.gymId || null;
    return next();
  }

  // Gym Owners and Members must belong to a specific gymId
  const gymId = req.user?.gymId;
  if (!gymId) {
    return next(new ForbiddenError('No active gym tenant associated with this account'));
  }

  req.gymId = gymId;
  next();
};
