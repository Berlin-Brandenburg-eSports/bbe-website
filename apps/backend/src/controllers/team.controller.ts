import { RequestHandler } from 'express';
import TeamUtil from '../utils/team.util';
import Controller from './base.controller';

export default class TeamController extends Controller {
  public setupRouter(): void {
    this.createRoute('/teams').get(this.getTeams).all(this.notAllowed);
  }

  private getTeams: RequestHandler = async (_req, res, next) => {
    try {
      const teams = await TeamUtil.getTeams();
      res.send(teams);
    } catch (error) {
      next(error);
    }
  };
}
