import { Auth } from '@bbe/types';
import useSWR, { SWRResponse } from 'swr';
import { fetcher } from '../utils/fetch.util';

export const useAuth = (): SWRResponse<Auth> => {
  return useSWR<Auth>('/auth', fetcher);
};
