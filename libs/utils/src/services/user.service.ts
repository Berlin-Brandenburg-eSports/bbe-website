import { User } from '@bbe/types';
import axios from 'axios';
import useSWR, { SWRResponse } from 'swr';
import { fetcher } from '../configs/axios.config';

export const useUsers = (): SWRResponse<User[]> => {
  return useSWR<User[]>('/users', fetcher);
};

export const useUser = (id = 'me'): SWRResponse<User> => {
  return useSWR<User>(`/users/${id}`, fetcher);
};

export class UserService {
  public static async getMe(Cookie: string): Promise<User> {
    const { data } = await axios.get<User>('/users/me', { headers: { Cookie } });

    return data;
  }
}
