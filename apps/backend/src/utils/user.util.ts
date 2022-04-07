import { User } from '@bbe/types';
import createHttpError from 'http-errors';
import { UserModel } from '../models/user.model';

export default class UserUtil {
  public static async getUsers(): Promise<User[]> {
    return UserModel.find().lean();
  }

  public static async getUserById(id: string): Promise<User> {
    const user = await UserModel.findOne({ id }).lean();

    if (!user) {
      throw createHttpError(404, 'User not found', { id });
    }

    return user;
  }
}
