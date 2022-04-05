import { RequestHandler } from 'express';
import Controller from './base.controller';

export default class UserController extends Controller {
  public setupRouter(): void {
    this.createRoute('/users').get(this.getUsers);
  }

  private getUsers: RequestHandler = async (req, res, next) => {
    try {
      res.send(req.url);
    } catch (error) {
      next(error);
    }
  };
}
