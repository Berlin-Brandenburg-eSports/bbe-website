import { Game, GameEdit } from '@bbe/types';
import createHttpError from 'http-errors';
import { DeleteResult } from 'mongodb';
import { GameModel } from '../models/game.model';

export default class GameUtil {
  public static async getGames(): Promise<Game[]> {
    return GameModel.find().lean({ autopopulate: true });
  }

  public static async createGame(data: Partial<GameEdit>): Promise<Game> {
    const game = await GameModel.create(data);

    return game.toObject();
  }

  public static async updateGame(slug: Game['slug'], data: Partial<GameEdit>): Promise<Game> {
    const game = await GameModel.findOneAndUpdate({ slug }, data, { new: true }).lean({ autopopulate: true });

    if (!game) {
      throw createHttpError(404, 'Game not found', { slug });
    }

    return game;
  }

  public static async deleteGame(slug: Game['slug']): Promise<DeleteResult> {
    return GameModel.deleteOne({ slug });
  }
}
