import createHttpError from 'http-errors';
import { GetServerSidePropsContext } from 'next';
import useSWR, { SWRResponse } from 'swr';
import { fetcher } from './fetch.util';

export const useAuth = (): SWRResponse<{ authenticated: boolean }> => {
  return useSWR<{ authenticated: boolean }>('/auth', fetcher);
};

export default class AuthUtil {
  public static getCookies(context: GetServerSidePropsContext): string {
    const cookies = context.req.headers.cookie;

    if (!cookies) {
      throw createHttpError(401);
    }

    return cookies;
  }
}
