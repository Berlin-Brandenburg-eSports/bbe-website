import { RequestHandler } from 'express';

export const setRedirect: RequestHandler = (req, _res, next) => {
  const { ref = '' } = req.query;
  const referrer = req.headers.referer;

  if (referrer) {
    const url = new URL(ref.toString(), referrer);
    req.session.redirect = url.href;
  }

  next();
};
