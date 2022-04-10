import createHttpError from 'http-errors';
import { GetServerSidePropsContext } from 'next';

export default class AuthUtil {
  public static getCookies(context: GetServerSidePropsContext): string {
    const cookies = context.req.headers.cookie;

    if (!cookies) {
      throw createHttpError(401);
    }

    return cookies;
  }
}
