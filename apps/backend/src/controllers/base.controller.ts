import { User } from '@bbe/types';
import { IRoute, Request, Router } from 'express';
import createHttpError from 'http-errors';

export default abstract class Controller {
  public router = Router();

  public abstract setupRouter(): void;

  protected createRoute(endpoint: `/${string}`): IRoute {
    return this.router.route(endpoint.toString());
  }

  protected async getUser(req: Request): Promise<User> {
    const user = req.user as User;

    if (!user) {
      throw createHttpError(401);
    }

    return user;
  }
}
