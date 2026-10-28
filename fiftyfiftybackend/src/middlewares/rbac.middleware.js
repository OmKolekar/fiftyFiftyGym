import { ForbiddenError } from '../exceptions/index.js';

export const authorize = (...allowedRoles) => {
  return (req, res, next) => {
    if (!req.user || !req.user.role) {
      return next(new ForbiddenError('User identity could not be verified'));
    }

    if (!allowedRoles.includes(req.user.role)) {
      return next(new ForbiddenError(`Forbidden: Access requires one of [${allowedRoles.join(', ')}] roles`));
    }

    next();
  };
};
