import useSWR, { SWRResponse } from 'swr';
import { fetcher } from '../utils/fetch.util';

export const useAuth = (): SWRResponse<{ authenticated: boolean }> => {
  return useSWR<{ authenticated: boolean }>('/auth', fetcher);
};
