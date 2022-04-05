import { User } from '@bbe/types';
import createHttpError from 'http-errors';
import passport from 'passport';
import { Strategy } from 'passport-discord';
import { UserModel } from '../models/user.model';
import { env } from './env.config';

passport.serializeUser((user: User, done) => done(null, user.id));

passport.deserializeUser(async (id, done) => {
  try {
    const user = await UserModel.findOne({ id: Number(id) }).lean();
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
        const id = Number(profile.id);
        const user = await UserModel.findOneAndUpdate({ id }, { accessToken, refreshToken }, { new: true }).lean();
        if (user) return done(null, user);
        const newUser = (await UserModel.create({ id, accessToken, refreshToken })).toJSON();

        return done(null, newUser);
      } catch (error) {
        return done(error);
      }
    }
  )
);

export { passport };
