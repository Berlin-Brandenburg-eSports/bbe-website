import { User } from '@bbe/types';
import createHttpError from 'http-errors';
import passport from 'passport';
import { Strategy } from 'passport-discord';
import { UserModel } from '../models/user.model';
import { env } from './env.config';

passport.serializeUser((user: User, done) => done(null, user.id));

passport.deserializeUser(async (id, done) => {
  try {
    const user = await UserModel.findOne({ id }).select('+accessToken +refreshToken').lean();
    if (!user) throw createHttpError(404, `User ${id} not found`);

    done(null, user);
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
      scope: ['identify', 'email', 'guilds'],
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const { id, avatar, username, discriminator, guilds = [] } = profile;
        const tag = `${username}#${discriminator}`;
        const joined = guilds.some(({ id }) => id === '876507985030053999');
        const user = await UserModel.findOneAndUpdate(
          { id },
          { accessToken, refreshToken, avatar, tag, username, discriminator, joined },
          { new: true, upsert: true }
        ).lean();

        done(null, user);
      } catch (error) {
        done(error);
      }
    }
  )
);

export { passport };
