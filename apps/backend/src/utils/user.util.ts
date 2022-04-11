import { User } from '@bbe/types';
import createHttpError from 'http-errors';
import { Profile } from 'passport-discord';
import { env } from '../configs/env.config';
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

  public static async buildUser(params: Profile & { accessToken: string; refreshToken: string }): Promise<User> {
    const { id, guilds = [] } = params;
    const joined = guilds.some(({ id }) => id === env.DISCORD_GUILD_ID);
    const discriminator = Number(params.discriminator);
    const avatar = params.avatar === null ? '' : params.avatar;

    const tag = `${params.username}#${params.discriminator}`;
    const avatarUrl = DiscordUtil.getUserAvatar(params.id, avatar);
    const user: User = { ...params, avatar: avatarUrl, tag, nick: params.username, discriminator, joined };

    if (joined) {
      try {
        const guildUser = await DiscordUtil.getGuildMe(params.accessToken);

        if (guildUser.avatar) {
          user.avatar = DiscordUtil.getGuildAvatar(id, discriminator, guildUser.avatar);
        }

        if (guildUser.nick) {
          user.nick = guildUser.nick;
        }
      } catch {
        this.logger.warn(`Could not get guild information for user ${tag} (${user.id})`);
      }
    }

    return user;
  }
}
