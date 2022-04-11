import { User } from '@bbe/types';
import useSWR, { SWRResponse } from 'swr';
import { fetcher } from './fetch.util';

export const useUser = (id = 'me'): SWRResponse<User> => {
  return useSWR<User>(`/users/${id}`, fetcher);
};
