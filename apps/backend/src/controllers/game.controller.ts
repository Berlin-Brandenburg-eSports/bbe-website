import { RequestHandler } from 'express';
import GameUtil from '../utils/game.util';
import Controller from './base.controller';

export default class GameController extends Controller {
  public setupRouter(): void {
    this.createRoute('/games').get(this.getGames).all(this.notAllowed);
  }

  private getGames: RequestHandler = async (_req, res, next) => {
    try {
      const games = await GameUtil.getGames();

      res.send(games);
    } catch (error) {
      next(error);
    }
  };
}
