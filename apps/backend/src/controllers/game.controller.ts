import { Role } from '@bbe/types';
import { RequestHandler } from 'express';
import { isAuthenticated } from '../middlewares/auth.middleware';
import GameUtil from '../utils/game.util';
import Controller from './base.controller';

export default class GameController extends Controller {
  public setupRouter(): void {
    this.createRoute('/games').get(this.getGames).post(isAuthenticated(Role.Board), this.createGame).all(this.notAllowed);
    this.createRoute('/games/:slug')
      .patch(isAuthenticated(Role.Board), this.updateGame)
      .delete(isAuthenticated(Role.Board), this.deleteGame)
      .all(this.notAllowed);
  }

  private getGames: RequestHandler = async (_req, res, next) => {
    try {
      const games = await GameUtil.getGames();

      res.send(games);
    } catch (error) {
      next(error);
    }
  };

  private createGame: RequestHandler = async (req, res, next) => {
    try {
      const game = await GameUtil.createGame(req.body);

      res.send(game);
    } catch (error) {
      next(error);
    }
  };

  private updateGame: RequestHandler = async (req, res, next) => {
    try {
      const { slug } = req.params;
      const game = await GameUtil.updateGame(slug, req.body);

      res.send(game);
    } catch (error) {
      next(error);
    }
  };

  private deleteGame: RequestHandler = async (req, res, next) => {
    try {
      const { slug } = req.params;
      const game = await GameUtil.deleteGame(slug);

      res.send(game);
    } catch (error) {
      next(error);
    }
  };
}
