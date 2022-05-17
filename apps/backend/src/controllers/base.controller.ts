import { Role, User } from '@bbe/types';
import { hasPermission } from '@bbe/utils';
import { IRoute, Request, RequestHandler, Router } from 'express';
import createHttpError from 'http-errors';

export default abstract class Controller {
  public router = Router();

  public abstract setupRouter(): void;

  protected createRoute(endpoint: `/${string}`): IRoute {
    return this.router.route(endpoint.toString());
  }

  protected getUser(req: Request, role?: Role): User {
    if (!req.user) {
      throw createHttpError(401);
    }

    if (role && !hasPermission(req.user.role, role)) {
      throw createHttpError(403);
    }

    return req.user;
  }

  protected checkOwner(req: Request, id: User['id']): void {
    const { role, id: userId } = this.getUser(req);

    if (id !== userId && !hasPermission(role, Role.Admin)) {
      throw createHttpError(403, { userId, role });
    }
  }

  protected notAllowed: RequestHandler = async (_req, _res, next) => {
    try {
      throw createHttpError(405);
    } catch (error) {
      next(error);
    }
  };
}
