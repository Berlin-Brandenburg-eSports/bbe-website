import { RequestHandler } from 'express';
import UserUtil from '../utils/user.util';
import Controller from './base.controller';

export default class UserController extends Controller {
  public setupRouter(): void {
    this.createRoute('/users').get(this.getUsers).all(this.notAllowed);
    this.createRoute('/users/:id').get(this.getUserById).all(this.notAllowed);
  }

  private getUsers: RequestHandler = async (req, res, next) => {
    try {
      const users = await UserUtil.getUsers();
      res.send(users);
    } catch (error) {
      next(error);
    }
  };

  private getUserById: RequestHandler = async (req, res, next) => {
    try {
      const { id } = req.params;

      const user = await UserUtil.getUserById(id);
      res.send(user);
    } catch (error) {
      next(error);
    }
  };
}
