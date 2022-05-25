import { Router } from 'express';
import AuthController from './auth.controller';
import Controller from './base.controller';
import DepartmentController from './department.controller';
import FileController from './file.controller';
import GameController from './game.controller';
import NewsController from './news.controller';
import TeamController from './team.controller';
import UserController from './user.controller';

const router = Router();

const controllers: Controller[] = [
  new AuthController(),
  new DepartmentController(),
  new NewsController(),
  new TeamController(),
  new UserController(),
  new GameController(),
  new FileController(),
];

controllers.forEach((controller) => {
  controller.setupRouter();
  router.use(controller.router);
});

export default router;
