import { Auth } from '@bbe/types';
import createHttpError from 'http-errors';
import { GetServerSidePropsContext } from 'next';
import useSWR, { SWRResponse } from 'swr';
import { fetcher } from '../utils/fetch.util';

export const useAuth = (): SWRResponse<Auth> => {
  return useSWR<Auth>('/auth', fetcher);
};

export default class AuthService {
  public static getCookies(context: GetServerSidePropsContext): string {
    const cookies = context.req.headers.cookie;

    if (!cookies) {
      throw createHttpError(401);
    }

    return cookies;
  }
}
