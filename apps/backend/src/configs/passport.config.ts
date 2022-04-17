import { User } from '@bbe/types';
import createHttpError from 'http-errors';
import passport from 'passport';
import { Strategy } from 'passport-discord';
import { UserModel } from '../models/user.model';
import UserUtil from '../utils/user.util';
import { env } from './env.config';

passport.serializeUser((user: User, done) => done(null, user.id));

passport.deserializeUser(async (id, done) => {
  try {
    const user = await UserModel.findOne({ id }).select('+accessToken +refreshToken');
    if (!user) throw createHttpError(404, `User ${id} not found`);

    done(null, user.toJSON());
  } catch (error) {
    done(error);
  }
});

passport.use(
  new Strategy(
    {
      clientID: env.DISCORD_CLIENT_ID,
      clientSecret: env.DISCORD_CLIENT_SECRET,
      callbackURL: `${env.API_URL}/v1/auth/discord`,
      scope: ['identify', 'email', 'guilds', 'guilds.members.read'],
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const { id, email, guilds = [] } = profile;

        let user = await UserModel.findOne({ id });

        if (!user) {
          const server = guilds.some(({ id }) => id === env.DISCORD_GUILD_ID);
          const discord = await UserUtil.getDiscordData({ ...profile, accessToken, refreshToken });
          user = await UserModel.create({ id, discord, contact: { email }, website: true, server });
        }

        done(null, user.toJSON());
      } catch (error) {
        done(error);
      }
    }
  )
);

export { passport };
