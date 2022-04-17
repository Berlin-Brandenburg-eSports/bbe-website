import { Department } from '@bbe/types';
import useSWR, { SWRResponse } from 'swr';
import { fetcher } from '../utils/fetch.util';

export const useDepartments = (): SWRResponse<Department[]> => {
  return useSWR<Department[]>('/departments', fetcher);
};
