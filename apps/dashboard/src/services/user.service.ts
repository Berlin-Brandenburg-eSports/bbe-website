import { User } from '@bbe/types';
import useSWR, { SWRResponse } from 'swr';
import { fetcher } from '../utils/fetch.util';

export const useUsers = (): SWRResponse<User[]> => {
  return useSWR<User[]>('/users', fetcher);
};
