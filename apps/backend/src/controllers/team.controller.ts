import { Role } from '@bbe/types';
import { RequestHandler } from 'express';
import { isAuthenticated } from '../middlewares/auth.middleware';
import TeamUtil from '../utils/team.util';
import Controller from './base.controller';

export default class TeamController extends Controller {
  public setupRouter(): void {
    this.createRoute('/teams').get(this.getTeams).post(isAuthenticated(Role.Department), this.createTeam).all(this.notAllowed);
  }

  private getTeams: RequestHandler = async (_req, res, next) => {
    try {
      const teams = await TeamUtil.getTeams();
      res.send(teams);
    } catch (error) {
      next(error);
    }
  };

  private createTeam: RequestHandler = async (req, res, next) => {
    try {
      const data = req.body;
      const team = await TeamUtil.createTeam(data);

      res.send(team);
    } catch (error) {
      next(error);
    }
  };
}
