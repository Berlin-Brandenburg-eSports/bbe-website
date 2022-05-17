import { Auth } from '@bbe/types';
import axios from 'axios';
import { GetServerSidePropsContext } from 'next';
import useSWR, { SWRResponse } from 'swr';
import { fetcher } from '../configs/axios.config';

export const useAuth = (): SWRResponse<Auth> => {
  return useSWR<Auth>('/auth', fetcher);
};

export class AuthService {
  public static getCookies(context: GetServerSidePropsContext): string {
    return context.req.headers.cookie || '';
  }

  public static async shouldRedirect(context: GetServerSidePropsContext): Promise<boolean> {
    try {
      const cookies = this.getCookies(context);
      const { authenticated } = await this.getAuth(cookies);

      return !authenticated;
    } catch {
      return true;
    }
  }

  public static async logout(): Promise<{ message: string }> {
    const { data } = await axios.get<{ message: string }>('/auth/logout');

    return data;
  }

  public static async getAuth(Cookie: string): Promise<Auth> {
    const { data } = await axios.get<Auth>('/auth', { headers: { Cookie } });

    return data;
  }
}
