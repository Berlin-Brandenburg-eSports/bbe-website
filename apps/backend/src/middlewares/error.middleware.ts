import { ErrorRequestHandler, RequestHandler } from 'express';
import createHttpError, { HttpError } from 'http-errors';
import { isEmpty } from 'lodash';
import Logger from '../utils/logger.util';

const logger = new Logger('🚨 Request', 'red');

export const errorHandler: ErrorRequestHandler = (err: HttpError, _req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }

  const { status = 500, message: msg, ...rest } = err;

  const message = err._message || msg;
  const error = err.errors || rest;

  logger.error(message, error);

  if (isEmpty(error)) {
    return res.status(status).send({ message });
  }

  return res.status(status).send({ message, data: error });
};

export const notFound: RequestHandler = (_req, res) => {
  const { status, message } = createHttpError(404);

  res.status(status).send({ message });
};
