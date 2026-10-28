import { ApiResponse } from '../utils/apiResponse.js';
import { HTTP_STATUS } from '../constants/httpStatus.constant.js';

export const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || HTTP_STATUS.INTERNAL_SERVER_ERROR;
  const message = err.message || 'An unexpected error occurred';
  const errors = err.details || null;

  if (process.env.NODE_ENV !== 'production' && statusCode === HTTP_STATUS.INTERNAL_SERVER_ERROR) {
    console.error('Unhandled Server Error:', err);
  }

  return ApiResponse.error(res, message, statusCode, errors);
};
