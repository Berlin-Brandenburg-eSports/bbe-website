import axios from 'axios';
import { RESTGetAPIGuildMemberResult, RESTGetAPIGuildRolesResult, RESTGetCurrentUserGuildMemberResult } from 'discord-api-types/v9';
import { env } from '../configs/env.config';

export default class DiscordUtil {
  private static readonly DISCORD_API = 'https://discord.com/api/v9';
  private static readonly DISCORD_CDN = 'https://cdn.discordapp.com';

  private static async get<T>(endpoint: `/${string}`, token?: string): Promise<T> {
    const Authorization = token ? `Bearer ${token}` : `Bot ${env.DISCORD_TOKEN}`;
    const { data } = await axios.get<T>(`${this.DISCORD_API}${endpoint}`, { headers: { Authorization } });

    return data;
  }

  public static async getGuildMe(token: string): Promise<RESTGetCurrentUserGuildMemberResult> {
    return this.get<RESTGetCurrentUserGuildMemberResult>(`/users/@me/guilds/${env.DISCORD_GUILD_ID}/member`, token);
  }

  public static async getGuildRoles(): Promise<RESTGetAPIGuildRolesResult> {
    return this.get<RESTGetAPIGuildRolesResult>(`/guilds/${env.DISCORD_GUILD_ID}/roles`);
  }

  public static async getGuildMembers(limit = 1000): Promise<RESTGetAPIGuildMemberResult[]> {
    return this.get<RESTGetAPIGuildMemberResult[]>(`/guilds/${env.DISCORD_GUILD_ID}/members?limit=${limit}`);
  }

  private static getImageType(hash: string): 'gif' | 'png' {
    return hash.startsWith('a_') ? 'gif' : 'png';
  }

  public static getGuildAvatar(id: string, discriminator: number, hash?: string): string {
    return hash
      ? `${this.DISCORD_CDN}/guilds/${env.DISCORD_GUILD_ID}/users/${id}/avatars/${hash}.${this.getImageType(hash)}`
      : `${this.DISCORD_CDN}/embed/avatars/${discriminator % 5}.png`;
  }

  public static getUserAvatar(id: string, hash: string): string {
    return `${this.DISCORD_CDN}/avatars/${id}/${hash}.${this.getImageType(hash)}`;
  }
}
