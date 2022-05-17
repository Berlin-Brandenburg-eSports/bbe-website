import { News } from '@bbe/types';
import useSWR, { SWRResponse } from 'swr';
import { fetcher } from '../configs/axios.config';

export const useNews = (): SWRResponse<News[]> => {
  return useSWR<News[]>('/news', fetcher);
};
