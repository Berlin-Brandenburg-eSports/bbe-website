import { RequestHandler } from 'express';
import passport from 'passport';
import { env } from '../configs/env.config';
import Controller from './base.controller';

export default class AuthController extends Controller {
  public setupRouter(): void {
    this.createRoute('/auth').get(this.getAuth).all(this.notAllowed);
    this.createRoute('/auth/login').get(passport.authenticate('discord')).all(this.notAllowed);
    this.createRoute('/auth/discord')
      .get(passport.authenticate('discord', { successReturnToOrRedirect: `${env.FRONTEND_URL}/konto` }), this.discord)
      .all(this.notAllowed);
    this.createRoute('/auth/logout').get(this.logout).all(this.notAllowed);
  }

  private getAuth: RequestHandler = async (req, res) => {
    try {
      const user = this.getUser(req);

      res.send({ authenticated: !!user });
    } catch (error) {
      res.send({ authenticated: false });
    }
  };

  private discord: RequestHandler = async (_req, res, next) => {
    try {
      res.send({ message: 'Success' });
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
