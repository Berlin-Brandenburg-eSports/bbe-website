import { Router } from 'express';
import { env } from '../configs/env.config';
import AuthController from './auth.controller';
import Controller from './base.controller';
import DepartmentController from './department.controller';
import TeamController from './team.controller';
import UserController from './user.controller';

const router = Router();

const controllers: Controller[] = [new UserController(), new AuthController(), new DepartmentController(), new TeamController()];

controllers.forEach((controller) => {
  controller.setupRouter();
  router.use(controller.router);
});

router.get('/', (req, res, next) => {
  try {
    res.send({ name: 'Berlin-Brandenburg eSports e.V.', env: env.NODE_ENV, version: req.baseUrl });
  } catch (error) {
    next(error);
  }
});

export default router;
