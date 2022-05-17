import { env } from '@bbe/types';
import { RequestHandler } from 'express';
import passport from 'passport';
import { setRedirect } from '../middlewares/auth.middleware';
import Controller from './base.controller';

export default class AuthController extends Controller {
  public setupRouter(): void {
    this.createRoute('/auth').get(this.getAuth).all(this.notAllowed);
    this.createRoute('/auth/login').get(setRedirect, passport.authenticate('discord')).all(this.notAllowed);
    this.createRoute('/auth/discord').get(passport.authenticate('discord'), this.discord).all(this.notAllowed);
    this.createRoute('/auth/logout').get(this.logout).all(this.notAllowed);
  }

  private getAuth: RequestHandler = async (req, res) => {
    try {
      const user = this.getUser(req);

      res.send({ authenticated: !!user.website, role: user.role });
    } catch (error) {
      res.send({ authenticated: false });
    }
  };

  private discord: RequestHandler = async (req, res, next) => {
    try {
      res.redirect(req.session.redirect || env.FRONTEND_URL);
      delete req.session.redirect;
    } catch (error) {
      next(error);
    }
  };

  private logout: RequestHandler = async (req, res, next) => {
    if (req.session) {
      req.session.destroy((error) => {
        if (error) {
          return next(error);
        }

        req.logout();
        res.clearCookie(env.CONNECTION_COOKIE);

        res.send({ message: 'Bye!' });
      });
    }
  };
}
