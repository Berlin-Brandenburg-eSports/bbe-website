import { User } from '@bbe/types';
import classNames from 'classnames';
import { GetServerSideProps, NextPage } from 'next';
import Router from 'next/router';
import Button from '../components/Button';
import { env } from '../configs/env.config';
import UserService from '../services/user.service';
import BaseTemplate from '../templates/BaseTemplate';
import AuthUtil from '../utils/auth.util';

interface AccountPagePros {
  user: User;
}

const AccountPage: NextPage<AccountPagePros> = ({ user }) => {
  const handleLogout = async (): Promise<void> => {
    await UserService.logout();
    Router.push('/');
  };

  return (
    <BaseTemplate>
      <div className={classNames('container')}>
        <h1>Hello, {user.tag}</h1>
        <Button onClick={handleLogout}>Logout</Button>
      </div>
    </BaseTemplate>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const cookies = AuthUtil.getCookies(context);
    const user = await UserService.getMe(cookies);

    return { props: { user } };
  } catch (error) {
    return {
      redirect: {
        destination: `${env.API_URL}/v1/auth/login`,
        permanent: false,
      },
    };
  }
};

export default AccountPage;
