import { AppError } from './AppError.js';
import { HTTP_STATUS } from '../constants/httpStatus.constant.js';

export class BadRequestError extends AppError {
  constructor(message = 'Bad Request', details = null) {
    super(message, HTTP_STATUS.BAD_REQUEST, details);
  }
}

export class UnauthorizedError extends AppError {
  constructor(message = 'Unauthorized access', details = null) {
    super(message, HTTP_STATUS.UNAUTHORIZED, details);
  }
}

export class ForbiddenError extends AppError {
  constructor(message = 'Access forbidden: Insufficient permissions', details = null) {
    super(message, HTTP_STATUS.FORBIDDEN, details);
  }
}

export class NotFoundError extends AppError {
  constructor(message = 'Resource not found', details = null) {
    super(message, HTTP_STATUS.NOT_FOUND, details);
  }
}

export class ConflictError extends AppError {
  constructor(message = 'Conflict detected with existing resource', details = null) {
    super(message, HTTP_STATUS.CONFLICT, details);
  }
}
