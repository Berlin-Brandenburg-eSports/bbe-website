import { env, User } from '@bbe/types';
import createHttpError from 'http-errors';
import { DeleteResult } from 'mongodb';
import { Profile } from 'passport-discord';
import { UserModel } from '../models/user.model';
import DiscordUtil from './discord.util';
import Logger from './logger.util';

export default class UserUtil {
  private static readonly logger = new Logger('UserUtil', 'cyan');

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

  public static async getDiscordData(params: Profile & { accessToken: string; refreshToken: string }): Promise<User['discord']> {
    const { id, guilds = [], accessToken, refreshToken, username } = params;
    const discord = guilds.some(({ id }) => id === env.DISCORD_GUILD_ID);
    const discriminator = Number(params.discriminator);
    const avatar = params.avatar === null ? '' : params.avatar;

    const tag = `${params.username}#${params.discriminator}`;
    const avatarUrl = DiscordUtil.getUserAvatar(params.id, avatar);
    const data: User['discord'] = { accessToken, avatar: avatarUrl, discriminator, nick: username, refreshToken, tag, username };

    if (discord) {
      try {
        const guildUser = await DiscordUtil.getGuildMe(params.accessToken);

        if (guildUser.avatar) {
          data.avatar = DiscordUtil.getGuildAvatar(id, discriminator, guildUser.avatar);
        }

        if (guildUser.nick) {
          data.nick = guildUser.nick;
        }
      } catch {
        this.logger.warn(`Could not get guild information for user ${tag} (${params.id})`);
      }
    }

    return data;
  }

  public static async updateUser(id: User['id'], data: Partial<User>): Promise<User> {
    const user = await UserModel.findOneAndUpdate({ id }, data, { new: true }).lean();

    if (!user) {
      throw createHttpError(404, 'User not found', { id });
    }

    return user;
  }

  public static async deleteUser(id: User['id']): Promise<DeleteResult> {
    return UserModel.deleteOne({ id });
  }
}
