import axios from 'axios';
import { RESTGetCurrentUserGuildMemberResult } from 'discord-api-types/v9';
import { env } from '../configs/env.config';

export default class DiscordUtil {
  private static readonly DISCORD_API = 'https://discord.com/api/v9';
  private static readonly DISCORD_CDN = 'https://cdn.discordapp.com';

  private static async get<T>(endpoint: `/${string}`, token: string): Promise<T> {
    const { data } = await axios.get<T>(`${this.DISCORD_API}${endpoint}`, { headers: { Authorization: `Bearer ${token}` } });

    return data;
  }

  public static async getGuildMe(token: string): Promise<RESTGetCurrentUserGuildMemberResult> {
    const user = await this.get<RESTGetCurrentUserGuildMemberResult>(`/users/@me/guilds/${env.DISCORD_GUILD_ID}/member`, token);

    return user;
  }

  public static getGuildAvatar(id: string, discriminator: number, hash?: string): string {
    return hash
      ? `${this.DISCORD_CDN}/guilds/${env.DISCORD_GUILD_ID}/users/${id}/avatars/${hash}.gif`
      : `${this.DISCORD_CDN}/embed/avatars/${discriminator % 5}.png`;
  }

  public static getUserAvatar(id: string, hash: string): string {
    return `${this.DISCORD_CDN}/guilds/${env.DISCORD_GUILD_ID}/avatars/${id}/${hash}.gif`;
  }
}
