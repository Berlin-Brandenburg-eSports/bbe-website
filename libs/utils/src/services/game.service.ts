import { Game, GameEdit } from '@bbe/types';
import axios from 'axios';
import useSWR, { SWRResponse } from 'swr';
import { fetcher } from '../configs/axios.config';

export const useGames = (): SWRResponse<Game[]> => {
  return useSWR<Game[]>('/games', fetcher);
};

export class GameService {
  public static async createGame(data: Partial<GameEdit>): Promise<Game> {
    const { data: response } = await axios.post('/games', data);

    return response;
  }
}
