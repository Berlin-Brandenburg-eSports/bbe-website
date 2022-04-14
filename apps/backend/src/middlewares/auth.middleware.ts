import { RequestHandler } from 'express';

export const setRedirect: RequestHandler = (req, _res, next) => {
  req.session.redirect = req.headers.referer;

  next();
};
