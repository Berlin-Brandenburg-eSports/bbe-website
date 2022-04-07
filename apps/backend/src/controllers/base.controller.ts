import { User } from '@bbe/types';
import { IRoute, Request, RequestHandler, Router } from 'express';
import createHttpError from 'http-errors';
import { UserModel } from '../models/user.model';

export default abstract class Controller {
  public router = Router();

  public abstract setupRouter(): void;

  protected createRoute(endpoint: `/${string}`): IRoute {
    return this.router.route(endpoint.toString());
  }

  protected async getUser(req: Request): Promise<User> {
    if (!req.user) {
      throw createHttpError(401);
    }

    const { id } = req.user as User;

    const user = await UserModel.findOne({ id }).select('+accessToken +refreshToken');

    if (!user) {
      throw createHttpError(401);
    }

    return user.toJSON();
  }

  protected notAllowed: RequestHandler = async (_req, _res, next) => {
    try {
      throw createHttpError(405);
    } catch (error) {
      next(error);
    }
  };
}
