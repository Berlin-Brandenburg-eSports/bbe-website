import { RequestHandler } from 'express';
import passport from 'passport';
import Controller from './base.controller';

export default class AuthController extends Controller {
  public setupRouter(): void {
    this.createRoute('/auth/login').get(passport.authenticate('discord'));
    this.createRoute('/auth/discord').get(passport.authenticate('discord'), this.discord);
  }

  private discord: RequestHandler = async (_req, res, next) => {
    try {
      res.send({ message: 'Success' });
    } catch (error) {
      next(error);
    }
  };
}
