import { Role } from '@bbe/types';
import { hasPermission } from '@bbe/utils';
import { RequestHandler } from 'express';
import createHttpError from 'http-errors';

export const setRedirect: RequestHandler = (req, _res, next) => {
  const { ref = '' } = req.query;
  const referrer = req.headers.referer;

  if (referrer) {
    const url = new URL(ref.toString(), referrer);
    req.session.redirect = url.href;
  }

  next();
};

export const isAuthenticated =
  (role?: Role): RequestHandler =>
  (req, _res, next) => {
    try {
      if (!req.user) {
        throw createHttpError(401);
      }

      if (role && !hasPermission(req.user.role, role)) {
        throw createHttpError(403);
      }

      return req.user;
    } catch (error) {
      next(error);
    }
  };
