import { Game } from '@bbe/types';
import { GameModel } from '../models/game.model';

export default class GameUtil {
  public static async getGames(): Promise<Game[]> {
    return GameModel.find().lean();
  }
}
