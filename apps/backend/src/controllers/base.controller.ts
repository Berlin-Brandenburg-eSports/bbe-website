import { User } from '@bbe/types';
import { IRoute, Request, RequestHandler, Router } from 'express';
import createHttpError from 'http-errors';

export default abstract class Controller {
  public router = Router();

  public abstract setupRouter(): void;

  protected createRoute(endpoint: `/${string}`): IRoute {
    return this.router.route(endpoint.toString());
  }

  protected getUser(req: Request): User {
    if (!req.user) {
      throw createHttpError(401);
    }

    return req.user;
  }

  protected notAllowed: RequestHandler = async (_req, _res, next) => {
    try {
      throw createHttpError(405);
    } catch (error) {
      next(error);
    }
  };
}
