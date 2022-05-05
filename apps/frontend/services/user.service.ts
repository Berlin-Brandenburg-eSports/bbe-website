import { User } from '@bbe/types';
import axios from 'axios';

export default class UserService {
  public static async getMe(Cookie: string): Promise<User> {
    const { data } = await axios.get<User>('/users/me', { headers: { Cookie } });

    return data;
  }
}
