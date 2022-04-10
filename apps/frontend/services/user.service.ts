import { User } from '@bbe/types';
import axios from 'axios';

export default class UserService {
  public static async getMe(Cookie: string): Promise<User> {
    const { data } = await axios.get<User>('/users/me', { headers: { Cookie } });

    return data;
  }

  public static async logout(): Promise<{ message: string }> {
    const { data } = await axios.get<{ message: string }>('/auth/logout');

    return data;
  }
}
