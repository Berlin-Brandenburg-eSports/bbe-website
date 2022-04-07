import { RequestHandler } from 'express';
import { UserModel } from '../models/user.model';
import Controller from './base.controller';

export default class UserController extends Controller {
  public setupRouter(): void {
    this.createRoute('/users').get(this.getUsers);
  }

  private getUsers: RequestHandler = async (req, res, next) => {
    try {
      const users = await UserModel.find();
      res.send(users);
    } catch (error) {
      next(error);
    }
  };
}
