import { RequestHandler } from 'express';
import { isAuthenticated } from '../middlewares/auth.middleware';
import UserUtil from '../utils/user.util';
import Controller from './base.controller';

export default class UserController extends Controller {
  public setupRouter(): void {
    this.createRoute('/users').get(this.getUsers).all(this.notAllowed);
    this.createRoute('/users/me').get(this.getUserByCookie).all(this.notAllowed);
    this.createRoute('/users/:id')
      .get(this.getUserById)
      .patch(isAuthenticated(), this.updateUser)
      .delete(this.deleteUser)
      .all(this.notAllowed);
  }

  private getUsers: RequestHandler = async (_req, res, next) => {
    try {
      const users = await UserUtil.getUsers();

      res.send(users);
    } catch (error) {
      next(error);
    }
  };

  private getUserByCookie: RequestHandler = async (req, res, next) => {
    try {
      const user = this.getUser(req);

      res.send(user);
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

  private updateUser: RequestHandler = async (req, res, next) => {
    try {
      const { id } = req.params;
      const data = req.body;
      this.checkOwner(req, id);

      const user = await UserUtil.updateUser(id, data);

      res.send(user);
    } catch (error) {
      next(error);
    }
  };

  private deleteUser: RequestHandler = async (req, res, next) => {
    try {
      const { id } = req.params;
      this.checkOwner(req, id);

      const user = await UserUtil.deleteUser(id);

      res.send(user);
    } catch (error) {
      next(error);
    }
  };
}
