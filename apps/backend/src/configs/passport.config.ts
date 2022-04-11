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
        const { id } = profile;
        const userData = await UserUtil.buildUser({ ...profile, accessToken, refreshToken });
        const user = await UserModel.findOneAndUpdate({ id }, userData, { new: true, upsert: true }).lean();

        done(null, user);
      } catch (error) {
        done(error);
      }
    }
  )
);

export { passport };
