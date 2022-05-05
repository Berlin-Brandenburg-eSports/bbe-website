import { Auth, User } from '@bbe/types';
import axios from 'axios';
import useSWR, { SWRResponse } from 'swr';

export const fetcher = <T>(url: string): Promise<T> => axios.get<T>(url).then((res) => res.data);

export const useAuth = (): SWRResponse<Auth> => {
  return useSWR<Auth>('/auth', fetcher);
};

export const useUser = (id = 'me'): SWRResponse<User> => {
  return useSWR<User>(`/users/${id}`, fetcher);
};
