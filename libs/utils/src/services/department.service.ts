import { Department } from '@bbe/types';
import useSWR, { SWRResponse } from 'swr';
import { fetcher } from '../configs/axios.config';

export const useDepartments = (): SWRResponse<Department[]> => {
  return useSWR<Department[]>('/departments', fetcher);
};
