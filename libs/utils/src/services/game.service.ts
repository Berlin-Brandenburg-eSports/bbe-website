import { Game } from '@bbe/types';
import useSWR, { SWRResponse } from 'swr';
import { fetcher } from '../configs/axios.config';

export const useGames = (): SWRResponse<Game[]> => {
  return useSWR<Game[]>('/games', fetcher);
};
