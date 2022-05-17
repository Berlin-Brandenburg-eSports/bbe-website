import { Team } from '@bbe/types';
import useSWR, { SWRResponse } from 'swr';
import { fetcher } from '../configs/axios.config';

export const useTeams = (): SWRResponse<Team[]> => {
  return useSWR<Team[]>('/teams', fetcher);
};
